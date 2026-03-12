import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Users, Loader2, Play, Search, Send } from 'lucide-react';
import { subscribeToLobby } from '../services/lobby';
import { searchYouTube } from '../services/youtube';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../firebase/config';

export default function Drafting() {
  const { id: lobbyId } = useParams();
  const navigate = useNavigate();
  const [lobby, setLobby] = useState(null);
  const [playerId] = useState(localStorage.getItem('playerId'));
  const [isSpinning, setIsSpinning] = useState(false);
  const [spunArtist, setSpunArtist] = useState(null);
  
  // Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const unsub = subscribeToLobby(lobbyId, (data) => {
        setLobby(data);
        if (data.status === 'battling_ko') {
            navigate(`/battle/${lobbyId}`);
        }
    });
    return () => unsub();
  }, [lobbyId, navigate]);

  const handleSpin = () => {
      if (lobby.currentPlayerTurn !== playerId || isSpinning) return;
      
      setIsSpinning(true);
      setSpunArtist(null);
      setSearchResults([]);
      setSearchQuery('');

      // Simulate wheel spin animation length
      setTimeout(() => {
          const randomIndex = Math.floor(Math.random() * lobby.wheelArtists.length);
          const pickedArtist = lobby.wheelArtists[randomIndex];
          setSpunArtist(pickedArtist);
          setSearchQuery(pickedArtist + ' '); // Pre-fill search
          setIsSpinning(false);
      }, 3000);
  };

  const handleSearch = async () => {
    if (!searchQuery) return;
    setIsSearching(true);
    // Force the search to include the artist name if possible
    const query = searchQuery.includes(spunArtist) ? searchQuery : `${spunArtist} ${searchQuery}`;
    const results = await searchYouTube(query);
    setSearchResults(results);
    setIsSearching(false);
  };

  const handlePickSong = async (song) => {
      if (!lobby || !spunArtist) return;

      try {
          const lobbyRef = doc(db, 'lobbies', lobbyId);
          const currentPortfolios = lobby.portfolios || {};
          const playerPortfolio = currentPortfolios[playerId] || [];
          
          const newPortfolioState = {
              ...currentPortfolios,
              [playerId]: [...playerPortfolio, { ...song, artist: spunArtist }]
          };

          // Determine next player's turn
          const currentIndex = lobby.players.findIndex(p => p.id === playerId);
          const nextIndex = (currentIndex + 1) % lobby.players.length;
          const nextPlayerId = lobby.players[nextIndex].id;

          await updateDoc(lobbyRef, {
              portfolios: newPortfolioState,
              currentPlayerTurn: nextPlayerId
          });
          
          setSpunArtist(null);
          setSearchResults([]);
      } catch (err) {
          console.error("Fehler beim Portfolio Update:", err);
      }
  };

  // Check if draft is complete (e.g. everyone has 3 songs)
  const SONGS_PER_PLAYER = 3;
  const isDraftComplete = lobby && lobby.players.every(p => {
      const port = lobby.portfolios?.[p.id] || [];
      return port.length >= SONGS_PER_PLAYER;
  });

  const handleStartKnockout = async () => {
      const lobbyRef = doc(db, 'lobbies', lobbyId);
      await updateDoc(lobbyRef, { status: 'battling_ko' });
  };

  if (!lobby) return <div className="flex-1 flex items-center justify-center bg-dark text-white"><Loader2 className="animate-spin" /></div>;

  const isHost = lobby.hostId === playerId;
  const myPortfolio = lobby.portfolios?.[playerId] || [];

  return (
    <div className="flex-1 flex flex-col bg-dark text-white p-6 max-w-4xl mx-auto w-full">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary">Drafting Phase</h2>
          <p className="text-3xl font-black tracking-tighter">GLÜCKSRAD</p>
        </div>
        <div className="text-right">
             <div className="inline-flex items-center gap-2 bg-white/5 py-2 px-4 rounded-full border border-white/10">
                <Music size={16} className="text-primary"/>
                <span className="font-bold text-sm">Dein Deck: {myPortfolio.length}/{SONGS_PER_PLAYER}</span>
             </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
          
        {/* Wheel Section */}
        <section className="flex flex-col items-center justify-center bg-primary/5 rounded-3xl border border-primary/20 p-8 relative overflow-hidden">
            {lobby.currentPlayerTurn === playerId && !spunArtist && !isSpinning && (
                <div className="absolute top-4 bg-primary text-black font-black px-4 py-1 rounded-full text-sm animate-bounce shadow-[0_0_15px_rgba(29,185,84,0.5)]">
                    DU BIST DRAN!
                </div>
            )}
            
            {/* MVP Wheel Visualization */}
            <div className={`w-64 h-64 border-8 border-white/10 rounded-full flex items-center justify-center bg-black/50 relative shadow-2xl ${isSpinning ? 'animate-spin' : ''}`} style={{ animationDuration: '0.5s' }}>
                <div className="absolute top-0 w-4 h-4 bg-primary -mt-2 rotate-45"></div>
                {isSpinning ? (
                    <Trophy size={48} className="text-primary/50" />
                ) : spunArtist ? (
                    <div className="text-center p-4">
                        <p className="text-xs text-primary font-bold uppercase tracking-widest mb-2">Gewählt</p>
                        <h3 className="text-2xl font-black leading-tight break-words">{spunArtist}</h3>
                    </div>
                ) : (
                    <button 
                        onClick={handleSpin}
                        disabled={lobby.currentPlayerTurn !== playerId}
                        className="w-32 h-32 bg-primary rounded-full text-black font-black text-2xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:bg-gray-700 disabled:text-gray-400 disabled:hover:scale-100 flex flex-col items-center justify-center gap-2 shadow-xl shadow-primary/20"
                    >
                        <Play size={32} fill="currentColor" />
                        SPIN
                    </button>
                )}
            </div>

            {!isSpinning && !spunArtist && lobby.currentPlayerTurn !== playerId && (
                <p className="mt-8 font-bold text-gray-400 text-sm">
                    {lobby.players.find(p => p.id === lobby.currentPlayerTurn)?.name} dreht das Rad...
                </p>
            )}
        </section>

        {/* Search & Portfolio Section */}
        <section className="space-y-6 flex flex-col">
            
            {/* Active Draft Action */}
            {spunArtist && lobby.currentPlayerTurn === playerId ? (
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 animate-in fade-in slide-in-from-right-4">
                    <h3 className="font-black text-xl mb-4 text-primary">Suche einen Song von {spunArtist}</h3>
                    <div className="flex gap-2 mb-4">
                        <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        className="flex-1 bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:ring-1 focus:ring-primary outline-none"
                        />
                        <button onClick={handleSearch} className="bg-primary text-black p-3 rounded-xl hover:bg-primary/90">
                        <Search size={20} />
                        </button>
                    </div>

                    <div className="space-y-2 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                        {searchResults.map(song => (
                        <button
                            key={song.videoId}
                            onClick={() => handlePickSong(song)}
                            className="w-full flex items-center gap-3 bg-black/30 hover:bg-white/10 p-3 rounded-xl transition-all text-left group border border-transparent hover:border-primary/50"
                        >
                            <img src={song.thumbnail} alt="" className="w-12 h-12 object-cover rounded-md" />
                            <div className="flex-1 min-w-0">
                            <p className="font-bold truncate text-sm">{song.title}</p>
                            <p className="text-xs text-gray-400 truncate">{song.channelTitle}</p>
                            </div>
                            <Send size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-all gap-2" />
                        </button>
                        ))}
                        {isSearching && <div className="text-center py-4"><Loader2 className="animate-spin mx-auto text-primary" /></div>}
                    </div>
                </div>
            ) : (
                 <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex-1 flex flex-col">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Dein Portfolio</h3>
                    <div className="space-y-3 flex-1 overflow-y-auto">
                        {myPortfolio.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-gray-600 space-y-2">
                                <Music size={48} className="opacity-20" />
                                <p className="font-bold text-sm">Noch leeres Deck</p>
                            </div>
                        ) : (
                            myPortfolio.map((song, i) => (
                                <div key={i} className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-white/5">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-black text-xs">
                                        {i+1}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-bold truncate text-sm">{song.title}</p>
                                        <p className="text-xs text-primary truncate">{song.artist}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                 </div>
            )}
        </section>
      </div>

      <footer className="mt-8 pt-6 border-t border-white/10">
        {isHost ? (
          <button
            disabled={!isDraftComplete}
            onClick={handleStartKnockout}
            className="w-full bg-primary disabled:bg-gray-800 disabled:text-gray-500 text-black font-black py-4 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-primary/10"
          >
            {isDraftComplete ? 'KO-RUNDE STARTEN' : 'WARTE AUF ALLE SPIELER (PORTFOLIOS FÜLLEN)'}
          </button>
        ) : (
            <div className="text-center text-gray-500 font-bold uppercase tracking-widest text-xs py-4">
                {isDraftComplete ? 'Warte auf Host für Turnierstart...' : 'Portfolios werden gefüllt...'}
            </div>
        )}
      </footer>
    </div>
  );
}
