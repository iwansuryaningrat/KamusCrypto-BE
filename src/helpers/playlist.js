/* Importing the database and the playlists collection. */
import db from "../models/index.js";
const Playlists = db.playlists;

// Increment Playlist video count
/**
 * It takes a playlistId, finds the playlist, increments the videoCount by 1, and returns true if
 * successful, or an error message if unsuccessful.
 * @param playlistId - The id of the playlist that you want to increment the video count of.
 * @returns The return value is a promise.
 */
const incrementPlaylistVideoCount = async (playlistId) => {
  const playlist = await Playlists.findById(playlistId);
  if (playlist) {
    const videoCount = playlist.videoCount;
    return await Playlists.findByIdAndUpdate(playlistId, {
      videoCount: videoCount + 1,
    })
      .then((result) => {
        return true;
      })
      .catch((err) => {
        return err.message;
      });
  } else {
    return false;
  }
};

// Decrement Playlist video count
/**
 * It takes a playlistId, finds the playlist, decrements the videoCount by 1, and then updates the
 * playlist with the new videoCount.
 * @param playlistId - The id of the playlist that you want to decrement the video count of.
 * @returns a promise.
 */
const decrementPlaylistVideoCount = async (playlistId) => {
  const playlist = await Playlists.findById(playlistId);
  if (playlist) {
    const videoCount = playlist.videoCount;
    return await Playlists.findByIdAndUpdate(playlistId, {
      videoCount: videoCount - 1,
    })

      .then((result) => {
        return true;
      })
      .catch((err) => {
        return err.message;
      });
  } else {
    return false;
  }
};

export { incrementPlaylistVideoCount, decrementPlaylistVideoCount };
