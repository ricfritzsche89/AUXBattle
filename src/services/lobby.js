import { 
    collection, 
    doc, 
    setDoc, 
    getDoc, 
    updateDoc, 
    onSnapshot, 
    arrayUnion 
} from "firebase/firestore";
import { db } from "../firebase/config";

/**
 * Creates a new lobby in Firestore
 * @param {string} hostId 
 * @param {string} hostName 
 * @returns {string} lobbyId
 */
export const createLobby = async (hostId, hostName) => {
  const lobbyId = Math.random().toString(36).substring(2, 8).toUpperCase();
  const lobbyRef = doc(db, "lobbies", lobbyId);
  
  const lobbyData = {
    id: lobbyId,
    hostId: hostId,
    status: "waiting", // waiting, setup_wheel, drafting, battling_ko, finished
    players: [
      { id: hostId, name: hostName, isReady: false }
    ],
    createdAt: new Date().toISOString(),
    currentRound: 0,
    wheelArtists: [], // 12 max
    currentPlayerTurn: null,
    portfolios: {}
  };
  
  await setDoc(lobbyRef, lobbyData);
  return lobbyId;
};

/**
 * Joins an existing lobby
 * @param {string} lobbyId 
 * @param {string} playerId 
 * @param {string} playerName 
 */
export const joinLobby = async (lobbyId, playerId, playerName) => {
  const lobbyRef = doc(db, "lobbies", lobbyId);
  const lobbySnap = await getDoc(lobbyRef);
  
  if (!lobbySnap.exists()) {
    throw new Error("Lobby nicht gefunden");
  }
  
  await updateDoc(lobbyRef, {
    players: arrayUnion({ id: playerId, name: playerName, isReady: false })
  });
};

/**
 * Toggles a player's ready status
 */
export const setPlayerReady = async (lobbyId, playerId, isReady) => {
    const lobbyRef = doc(db, "lobbies", lobbyId);
    const lobbySnap = await getDoc(lobbyRef);
    
    if (lobbySnap.exists()) {
        const players = lobbySnap.data().players.map(p => 
            p.id === playerId ? { ...p, isReady } : p
        );
        await updateDoc(lobbyRef, { players });
    }
};

/**
 * Listens for lobby changes
 */
export const subscribeToLobby = (lobbyId, callback) => {
  const lobbyRef = doc(db, "lobbies", lobbyId);
  return onSnapshot(lobbyRef, (doc) => {
    if (doc.exists()) {
      callback(doc.data());
    }
  });
};
