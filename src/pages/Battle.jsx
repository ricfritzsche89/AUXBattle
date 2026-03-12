import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Trophy, Music, Play, Pause, Vote, Loader2 } from 'lucide-react';
import { subscribeToLobby } from '../services/lobby';
import { doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../firebase/config';

export default function Battle() {
  const { id: lobbyId } = useParams();
  const navigate = useNavigate();
  const [lobby, setLobby] = useState(null);
  const [playerId] = useState(localStorage.getItem('playerId'));
  
  // Track hasVoted for A and B separately
  const [hasVotedA, setHasVotedA] = useState(false);
  const [hasVotedB, setHasVotedB] = useState(false);
  
  const [activeBattleIndex, setActiveBattleIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [battleWinner, setBattleWinner] = useState(null);

  useEffect(() => {
    const unsub = subscribeToLobby(lobbyId, (data) => {
      setLobby(data);
      
      // Automatic progression based on lobby state updates
      if (data?.battles?.[activeBattleIndex]) {
          const current = data.battles[activeBattleIndex];
          const totalVotes = (current.votesA || 0) + (current.votesB || 0);
          const totalPlayers = data.players.length;
          
          if (totalVotes > 0 && totalVotes >= totalPlayers && !showResult) {
              const winner = (current.votesA || 0) >= (current.votesB || 0) ? current.songA : current.songB;
              setBattleWinner(winner);
              setShowResult(true);
              
              // Only host triggers the next phase to avoid race conditions
              if (data.hostId === playerId) {
                  setTimeout(() => advanceTournament(data), 5000);
              }
          }
      }
    });
    return () => unsub();
  }, [lobbyId, activeBattleIndex, showResult, playerId]);

  const advanceTournament = async (currentLobbyData) => {
      const nextIndex = activeBattleIndex + 1;
      const lobbyRef = doc(db, 'lobbies', lobbyId);
      
      if (nextIndex < currentLobbyData.battles.length) {
          // Move to next battle
          await updateDoc(lobbyRef, { currentBattleIndex: nextIndex });
      } else {
          // Tournament over (MVP: Just show finished state)
          await updateDoc(lobbyRef, { status: 'finished' });
      }
  };

  // Sync active battle index from host
  useEffect(() => {
      if (lobby?.currentBattleIndex !== undefined && lobby.currentBattleIndex !== activeBattleIndex) {
          setActiveBattleIndex(lobby.currentBattleIndex);
          setHasVotedA(false);
          setHasVotedB(false);
          setShowResult(false);
          setBattleWinner(null);
      }
  }, [lobby?.currentBattleIndex]);

  const handleVote = async (songKey, points) => {
    if (songKey === 'A' && hasVotedA) return;
    if (songKey === 'B' && hasVotedB) return;
    
    if (songKey === 'A') setHasVotedA(true);
    if (songKey === 'B') setHasVotedB(true);
    
    const lobbyRef = doc(db, 'lobbies', lobbyId);
    const voteKey = `votes${songKey}`;
    const playersKey = `votedPlayers${songKey}`;
    
    try {
        const battles = [...lobby.battles];
        const currentBattle = battles[activeBattleIndex];
        
        // Add points to the total score for this song
        currentBattle[voteKey] = (currentBattle[voteKey] || 0) + points;
        
        // Track that this specific player has voted for this specific song
        currentBattle[playersKey] = currentBattle[playersKey] || [];
        if (!currentBattle[playersKey].includes(playerId)) {
            currentBattle[playersKey].push(playerId);
        }
        
        await updateDoc(lobbyRef, { battles });
    } catch (err) {
        console.error(err);
    }
  };

  if (!lobby || !lobby.battles) return <div className="flex-1 flex items-center justify-center bg-dark"><Loader2 className="animate-spin text-primary" /></div>;

  if (lobby.status === 'finished') {
      return (
          <div className="flex-1 flex flex-col items-center justify-center bg-dark text-white p-6 text-center space-y-6 animate-in fade-in slide-in-from-bottom-8">
              <Trophy size={80} className="text-yellow-400 mx-auto animate-bounce" />
              <h2 className="text-5xl font-black">TURNIER BEENDET</h2>
              <p className="text-gray-400">Alle Battles wurden ausgetragen!</p>
              <button onClick={() => navigate('/')} className="mt-8 bg-primary text-black font-bold py-4 px-8 rounded-full">Neues Spiel</button>
          </div>
      );
  }

  const currentBattle = lobby.battles[activeBattleIndex];
  if (!currentBattle) return <div>Kein Battle gefunden</div>;

  if (showResult && battleWinner) {
      return (
          <div className="flex-1 flex flex-col items-center justify-center bg-dark text-white p-6 text-center space-y-8 animate-in zoom-in duration-500">
              <div className="space-y-2">
                  <p className="text-primary font-bold tracking-widest uppercase">Gewinner dieser Runde</p>
                  <h2 className="text-4xl md:text-6xl font-black text-white">{battleWinner.title}</h2>
                  <p className="text-xl text-gray-400">{battleWinner.channelTitle}</p>
              </div>
              <div className="aspect-video w-full max-w-lg bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/50 relative">
                 <img src={battleWinner.thumbnail} alt={battleWinner.title} className="w-full h-full object-cover opacity-50" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Trophy size={64} className="text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.5)]" />
                 </div>
              </div>
              <Loader2 className="animate-spin mx-auto text-primary mt-8" />
              <p className="text-gray-500 text-sm">Nächstes Battle startet gleich...</p>
          </div>
      );
  }

  return (
    <div className="flex-1 flex flex-col bg-dark text-white p-6 md:p-12 overflow-y-auto">
      <header className="text-center mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary py-2 px-6 rounded-full border border-primary/20 text-sm font-bold animate-pulse">
            BATTLE AKTIV
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">WER GEWINNT?</h2>
        <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Runde {lobby.currentRound} &bull; Battle {activeBattleIndex + 1}/{lobby.battles.length}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto w-full flex-1">
        {/* SONG A */}
        <div className="flex flex-col space-y-6">
          <div className="aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 group relative">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/${currentBattle.songA.videoId}?autoplay=0&controls=1&playsinline=1&rel=0&modestbranding=1&origin=${window.location.origin}`}
              title="Song A"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="text-center space-y-4">
             <div>
                <h3 className="text-2xl font-black line-clamp-2">{currentBattle.songA.title}</h3>
                <p className="text-primary font-bold mb-2">{currentBattle.songA.channelTitle}</p>
             </div>
             
             {!hasVotedA ? (
                 <div className="space-y-2">
                     <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Punkte Vergeben</p>
                     <div className="flex justify-center gap-2">
                         {[1, 2, 3, 4, 5].map(pts => (
                             <button
                                 key={pts}
                                 onClick={() => handleVote('A', pts)}
                                 className="w-12 h-12 rounded-full font-black bg-primary text-black hover:scale-110 active:scale-95 transition-all shadow-lg shadow-primary/20"
                             >
                                 {pts}
                             </button>
                         ))}
                     </div>
                 </div>
             ) : (
                 <div className="py-4 border border-primary/20 bg-primary/10 rounded-2xl flex items-center justify-center gap-3">
                     <Vote size={20} className="text-primary" />
                     <span className="font-bold text-primary">Bewertet!</span>
                 </div>
             )}
          </div>
        </div>

        {/* VS Divider */}
        <div className="hidden md:flex items-center justify-center">
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-2xl font-black italic text-gray-500">
                VS
            </div>
        </div>

        {/* SONG B */}
        <div className="flex flex-col space-y-6">
          <div className="aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 group relative">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/${currentBattle.songB.videoId}?autoplay=0&controls=1&playsinline=1&rel=0&modestbranding=1&origin=${window.location.origin}`}
              title="Song B"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-center space-y-4">
             <div>
                <h3 className="text-2xl font-black line-clamp-2">{currentBattle.songB.title}</h3>
                <p className="text-primary font-bold mb-2">{currentBattle.songB.channelTitle}</p>
             </div>
             
             {!hasVotedB ? (
                 <div className="space-y-2">
                     <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Punkte Vergeben</p>
                     <div className="flex justify-center gap-2">
                         {[1, 2, 3, 4, 5].map(pts => (
                             <button
                                 key={pts}
                                 onClick={() => handleVote('B', pts)}
                                 className="w-12 h-12 rounded-full font-black bg-primary text-black hover:scale-110 active:scale-95 transition-all shadow-lg shadow-primary/20"
                             >
                                 {pts}
                             </button>
                         ))}
                     </div>
                 </div>
             ) : (
                 <div className="py-4 border border-primary/20 bg-primary/10 rounded-2xl flex items-center justify-center gap-3">
                     <Vote size={20} className="text-primary" />
                     <span className="font-bold text-primary">Bewertet!</span>
                 </div>
             )}
          </div>
        </div>
      </div>

      {hasVotedA && hasVotedB && (
        <div className="mt-12 text-center animate-bounce">
            <p className="text-primary font-black uppercase tracking-widest">Punkte vergeben!</p>
            <p className="text-gray-500 text-sm">Warte auf das Endergebnis...</p>
        </div>
      )}
    </div>
  );
}
