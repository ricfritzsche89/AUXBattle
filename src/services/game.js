import { 
    collection, 
    doc, 
    addDoc, 
    query, 
    where, 
    getDocs, 
    updateDoc, 
    onSnapshot 
} from "firebase/firestore";
import { db } from "../firebase/config";

/**
 * Submits a song for a player in a lobby
 */
export const submitSong = async (lobbyId, playerId, songData) => {
  const songsRef = collection(db, "songs");
  
  await addDoc(songsRef, {
    lobbyId,
    submittedBy: playerId,
    videoId: songData.videoId,
    title: songData.title,
    channelTitle: songData.channelTitle,
    thumbnail: songData.thumbnail,
    isRevealed: false,
    votes: 0,
    createdAt: new Date().toISOString(),
  });
};

/**
 * Gets all songs for the current lobby (only revealed songs if not host)
 */
export const getLobbySongs = async (lobbyId) => {
    const songsRef = collection(db, "songs");
    const q = query(songsRef, where("lobbyId", "==", lobbyId));
    const querySnap = await getDocs(q);
    
    return querySnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

/**
 * Starts the tournament using the players' portfolios
 */
export const startTournament = async (lobbyId, lobbyData) => {
    const lobbyRef = doc(db, "lobbies", lobbyId);
    
    // Extract all songs from portfolios
    let allSongs = [];
    if (lobbyData.portfolios) {
        Object.entries(lobbyData.portfolios).forEach(([playerId, songs]) => {
            const playerInfo = lobbyData.players.find(p => p.id === playerId);
            const taggedSongs = songs.map(song => ({ ...song, submittedBy: playerId, playerName: playerInfo?.name }));
            allSongs = [...allSongs, ...taggedSongs];
        });
    }

    // Create random pairings for the first round
    const shuffledSongs = [...allSongs].sort(() => 0.5 - Math.random());
    const battles = [];
    
    for (let i = 0; i < shuffledSongs.length; i += 2) {
        if (shuffledSongs[i+1]) {
            battles.push({
                songA: shuffledSongs[i],
                songB: shuffledSongs[i+1],
                votesA: 0,
                votesB: 0,
                // Track who has already voted in this battle
                votedPlayersA: [],
                votedPlayersB: [],
                winner: null,
                status: "active"
            });
        }
    }
    
    await updateDoc(lobbyRef, { 
        status: "battling_ko",
        currentRound: 1,
        battles: battles,
        currentBattleIndex: 0
    });
};
