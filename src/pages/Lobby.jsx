import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Users, CheckCircle, Search, Music, Send, Loader2 } from 'lucide-react';
import { subscribeToLobby, joinLobby, setPlayerReady } from '../services/lobby';
import { QRCodeSVG } from 'qrcode.react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export default function Lobby() {
  const { id: lobbyId } = useParams();
  const navigate = useNavigate();
  const [lobby, setLobby] = useState(null);
  const [artistInput, setArtistInput] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [playerId, setPlayerId] = useState(localStorage.getItem('playerId'));
  const [nickname, setNickname] = useState(localStorage.getItem('nickname'));
  const [joinName, setJoinName] = useState('');
  
  const joinUrl = window.location.href;

  useEffect(() => {
      // Do not redirect to / if missing credentials, we will render the Join UI instead
      if (!playerId || !nickname) return;

    const unsub = subscribeToLobby(lobbyId, (data) => {
        setLobby(data);
        if (data.status === 'drafting') {
            navigate(`/drafting/${lobbyId}`);
        } else if (data.status === 'battling_ko') {
            navigate(`/battle/${lobbyId}`);
        }
    });

    // Check if player is already in lobby, if not join
    const checkAndJoin = async () => {
        try {
            const data = await joinLobby(lobbyId, playerId, nickname);
        } catch (err) {
            // Player might already be in list
            console.log("Join attempt done");
        }
    };
    checkAndJoin();

    // Setup initial turn if host and no turn assigned
    if (lobby?.hostId === playerId && lobby?.players?.length > 0 && !lobby?.currentPlayerTurn) {
        const setInitialTurn = async () => {
             const lobbyRef = doc(db, 'lobbies', lobbyId);
             await updateDoc(lobbyRef, { currentPlayerTurn: playerId });
        };
        setInitialTurn();
    }

  }, [lobbyId, playerId, nickname, navigate, lobby?.hostId, lobby?.currentPlayerTurn]);

  const handleAddArtist = async () => {
      if (!artistInput.trim() || !lobby || lobby.wheelArtists?.length >= 12) return;
      if (lobby.currentPlayerTurn !== playerId) return alert("Du bist nicht dran!");

      try {
          const lobbyRef = doc(db, 'lobbies', lobbyId);
          const currentArtists = lobby.wheelArtists || [];
          const newArtists = [...currentArtists, artistInput.trim()];
          
          // Determine next player's turn
          const currentIndex = lobby.players.findIndex(p => p.id === playerId);
          const nextIndex = (currentIndex + 1) % lobby.players.length;
          const nextPlayerId = lobby.players[nextIndex].id;

          await updateDoc(lobbyRef, {
              wheelArtists: newArtists,
              currentPlayerTurn: nextPlayerId
          });
          
          setArtistInput('');
      } catch (err) {
          console.error("Fehler beim Hinzufügen:", err);
      }
  };

  const handleStartDrafting = async () => {
      if (lobby.wheelArtists?.length < 1) return alert("Es müssen Artists im Rad sein!");
      const lobbyRef = doc(db, 'lobbies', lobbyId);
      await updateDoc(lobbyRef, { status: 'drafting' });
  };

  const handleInstantJoin = async (e) => {
      e.preventDefault();
      if (!joinName.trim()) return;
      
      const newPlayerId = Math.random().toString(36).substring(2, 9);
      localStorage.setItem('playerId', newPlayerId);
      localStorage.setItem('nickname', joinName.trim());
      
      setPlayerId(newPlayerId);
      setNickname(joinName.trim());
  };

  if (!playerId || !nickname) {
      return (
          <div className="flex-1 flex flex-col items-center justify-center p-6 bg-dark">
              <div className="w-full max-w-sm bg-secondary p-8 rounded-3xl border border-white/5 shadow-2xl space-y-6">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-black">Lobby beitreten</h2>
                    <p className="text-gray-400 text-sm">Gib deinen Namen ein, um Lobby <span className="text-primary font-bold">{lobbyId}</span> beizutreten.</p>
                </div>
                <form onSubmit={handleInstantJoin} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Dein Name"
                        value={joinName}
                        onChange={(e) => setJoinName(e.target.value)}
                        className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                        autoFocus
                        required
                    />
                    <button type="submit" className="w-full bg-primary text-black font-black py-4 rounded-xl hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20">
                        BEITRETEN
                    </button>
                </form>
              </div>
          </div>
      );
  }

  if (!lobby) return <div className="flex-1 flex items-center justify-center bg-dark text-white"><Loader2 className="animate-spin" /></div>;

  const isHost = lobby.hostId === playerId;
  const allReady = lobby.players.every(p => p.isReady);

  return (
    <div className="flex-1 flex flex-col bg-dark text-white p-6 max-w-2xl mx-auto w-full">
      <header className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary">Lobby Code</h2>
          <div className="flex items-center gap-4">
            <p className="text-3xl font-black tracking-tighter">{lobbyId}</p>
            <button 
                onClick={() => setShowQR(!showQR)}
                className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-bold hover:bg-primary/30 transition-colors"
            >
                QR Anzeigen
            </button>
          </div>
          {showQR && (
            <div className="mt-4 p-4 bg-white rounded-2xl inline-block shadow-2xl animate-in fade-in slide-in-from-top-2">
                <QRCodeSVG value={joinUrl} size={150} />
                <p className="text-black text-center text-xs mt-2 font-bold break-all max-w-[150px]">{joinUrl}</p>
            </div>
          )}
        </div>
        <div className="text-right">
             <div className="inline-flex items-center gap-2 bg-white/5 py-2 px-4 rounded-full border border-white/10">
                <Users size={16} className="text-primary"/>
                <span className="font-bold text-sm">{lobby.players.length} Spieler</span>
             </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Player List */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">Spieler</h3>
          <div className="space-y-2">
            {lobby.players.map(player => (
              <div key={player.id} className="flex items-center justify-between bg-secondary p-4 rounded-xl border border-white/5">
                <span className="font-bold">{player.name} {player.id === playerId ? '(Du)' : ''}</span>
                {player.isReady ? (
                  <CheckCircle size={20} className="text-primary fill-primary/20" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-white/10" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Action Section: Wheel Setup */}
        <section className="space-y-4">
          <div className="flex justify-between items-end">
             <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">Glücksrad füllen</h3>
             <span className="text-xs font-bold bg-white/10 px-2 py-1 rounded-md">{lobby.wheelArtists?.length || 0} / 12</span>
          </div>
          
          <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl space-y-6">
              {/* Turn Indicator */}
              <div className="text-center">
                  {lobby.currentPlayerTurn === playerId ? (
                      <div className="inline-block bg-primary text-black font-black px-4 py-1 rounded-full text-sm animate-pulse shadow-[0_0_15px_rgba(29,185,84,0.5)]">
                          DEIN ZUG!
                      </div>
                  ) : (
                      <div className="inline-block bg-white/10 text-gray-400 font-bold px-4 py-1 rounded-full text-sm">
                          Warte auf {lobby.players.find(p => p.id === lobby.currentPlayerTurn)?.name || 'nächsten Spieler'}...
                      </div>
                  )}
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Interpret / Band eingeben..."
                  value={artistInput}
                  onChange={(e) => setArtistInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddArtist()}
                  disabled={lobby.currentPlayerTurn !== playerId || lobby.wheelArtists?.length >= 12}
                  className="flex-1 bg-secondary border border-white/10 rounded-xl p-3 text-white focus:ring-1 focus:ring-primary outline-none disabled:opacity-50"
                />
                <button 
                  onClick={handleAddArtist} 
                  disabled={lobby.currentPlayerTurn !== playerId || lobby.wheelArtists?.length >= 12}
                  className="bg-primary text-black p-3 rounded-xl disabled:opacity-50 disabled:bg-gray-700 hover:bg-primary/90 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>

              {/* 12 Slot Grid */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                  {[...Array(12)].map((_, i) => {
                      const artist = lobby.wheelArtists?.[i];
                      return (
                          <div key={i} className={`p-2 text-xs font-bold rounded-lg border text-center truncate ${artist ? 'border-primary/50 bg-primary/10 text-white' : 'border-white/5 bg-black/20 text-gray-600'}`}>
                              {artist || `${i + 1}`}
                          </div>
                      );
                  })}
              </div>
          </div>
        </section>
      </div>

      <footer className="mt-auto pt-8">
        {isHost && (
          <button
            disabled={lobby.wheelArtists?.length < 12}
            onClick={handleStartDrafting}
            className="w-full bg-primary disabled:bg-gray-800 disabled:text-gray-500 text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-primary/10"
          >
            {lobby.wheelArtists?.length < 12 ? 'RAD NOCH NICHT VOLL' : 'ZUM GLÜCKSRAD (DRAFT) STARTEN'}
          </button>
        )}
        {!isHost && (
            <div className="text-center text-gray-500 font-bold uppercase tracking-widest text-xs">
                Warte auf Host zum Starten...
            </div>
        )}
      </footer>
    </div>
  );
}
