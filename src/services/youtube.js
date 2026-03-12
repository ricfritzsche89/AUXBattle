const YOUTUBE_API_KEY = "AIzaSyDnYEK9RJD1pipQElmQ96NZE5LFuBiVcSo"; // Eingefügter Key vom Nutzer
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const searchYouTube = async (query) => {
  if (!query) return [];
  
  try {
    const response = await fetch(
      `${BASE_URL}/search?part=snippet&maxResults=8&q=${encodeURIComponent(
        query
      )}&type=video&videoEmbeddable=true&videoSyndicated=true&key=${YOUTUBE_API_KEY}`
    );
    
    if (!response.ok) {
        throw new Error("YouTube API Error");
    }
    
    const data = await response.json();
    
    return data.items.map((item) => ({
      videoId: item.id.videoId,
      title: item.snippet.title,
      channelTitle: item.snippet.channelTitle,
      thumbnail: item.snippet.thumbnails.default.url,
    }));
  } catch (error) {
    console.error("Error searching YouTube:", error);
    return [];
  }
};
