import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Music, Plus, Users } from 'lucide-react';
import { createLobby } from '../services/lobby';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [nickname, setNickname] = useState('');
  const [lobbyCode, setLobbyCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreateLobby = async () => {
    if (!nickname) return alert('Bitte Nickname eingeben');
    setIsLoading(true);
    try {
      const playerId = uuidv4();
      localStorage.setItem('playerId', playerId);
      localStorage.setItem('nickname', nickname);
      
      const lobbyId = await createLobby(playerId, nickname);
      navigate(`/lobby/${lobbyId}`);
    } catch (error) {
      console.error(error);
      alert('Fehler beim Erstellen der Lobby');
    } finally {
      setIsLoading(false);
    }
  };

  const handleJoinLobby = () => {
    if (!nickname || !lobbyCode) return alert('Bitte Nickname und Lobby-Code eingeben');
    const playerId = uuidv4();
    localStorage.setItem('playerId', playerId);
    localStorage.setItem('nickname', nickname);
    navigate(`/lobby/${lobbyCode.toUpperCase()}`);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 bg-dark">
      <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-4 p-4">
             <Music size={48} />
          </div>
          <h1 className="text-4xl font-black tracking-tighter text-white">AUX BATTLE</h1>
          <p className="text-gray-400">Das ultimative Musik-Duell-Spiel</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Nickname</label>
            <input
              type="text"
              placeholder="z.B. DJ Saufkopp"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full bg-secondary border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 pt-4">
            <button
              onClick={handleCreateLobby}
              disabled={isLoading}
              className="group relative w-full bg-primary hover:bg-primary/90 text-black font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-50"
            >
              <Plus size={20} />
              LOBBY ERSTELLEN
            </button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-dark px-2 text-gray-600 font-bold">Oder Beitreten</span>
              </div>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Lobby-Code (6-stellig)"
                value={lobbyCode}
                onChange={(e) => setLobbyCode(e.target.value)}
                className="w-full bg-secondary border-none rounded-xl p-4 text-center text-xl font-mono tracking-widest text-white focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
              />
              <button
                onClick={handleJoinLobby}
                className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 border border-white/10"
              >
                <Users size={20} />
                LOBBY BEITRETEN
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center">
          <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">Build v0.1.0 &bull; AUXBattle Studio</p>
        </div>
      </div>
    </div>
  );
}
