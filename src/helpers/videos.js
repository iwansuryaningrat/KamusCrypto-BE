/* Importing the database and the videos collection from the database. */
import db from "../models/index.js";
const Videos = db.videos;

// Update Video URL
/**
 * It takes in a videoId, and four urls, and updates the video with the given videoId with the given
 * urls
 * @param videoId - The id of the video that you want to update.
 * @param url1080 -
 * https://r1---sn-4g5e6n7s.googlevideo.com/videoplayback?expire=1598420000&ei=_Q-XX9_4J4yX1wK-6Z-gCw&
 * @param url720 -
 * https://r2---sn-4g5edn7l.googlevideo.com/videoplayback?expire=1598420000&ei=_Q-XX9_4J4yX1wK-6Z-gCw&ip
 * @param url480 -
 * https://r1---sn-4g5e6n7s.googlevideo.com/videoplayback?expire=1598420000&ei=_Q-XX9_4J4yX1wK-6Z-gCw&
 * @param url360 -
 * https://r1---sn-4g5e6n7s.googlevideo.com/videoplayback?expire=1598420100&ei=_Q-XX9_4J4yX1wK-6Z-gCw&
 * @returns {
 *   "url": [
 *     {
 *       "quality": "1080p",
 *       "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
 *     },
 *     {
 *       "quality": "720p",
 *       "url": "https://www.youtube.com/
 */
const updateVideoUrl = async (videoId, url1080, url720, url480, url360) => {
  return await Videos.findByIdAndUpdate(videoId, {
    url: [
      {
        quality: "1080p",
        url: url1080,
      },
      {
        quality: "720p",
        url: url720,
      },
      {
        quality: "480p",
        url: url480,
      },
      {
        quality: "360p",
        url: url360,
      },
    ],
  })
    .then((result) => {
      return true;
    })
    .catch((err) => {
      return err.message;
    });
};

// Update Video Views
/**
 * It takes a videoId, finds the video in the database, increments the views by 1, and returns true if
 * the update was successful.
 * @param videoId - The id of the video you want to update the views for.
 * @returns a promise.
 */
const updateVideoViews = async (videoId) => {
  const video = await Videos.findById(videoId);
  if (video) {
    const views = video.views;
    return await Videos.findByIdAndUpdate(videoId, {
      views: views + 1,
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

// Update Video Likes
/**
 * It takes a videoId, finds the video in the database, increments the likes by 1, and returns true if
 * the update was successful.
 * @param videoId - The id of the video that is being liked.
 * @returns a promise.
 */
const updateVideoLikes = async (videoId) => {
  const video = await Videos.findById(videoId);
  if (video) {
    const likes = video.likes;
    return await Videos.findByIdAndUpdate(videoId, {
      likes: likes + 1,
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

// Update Video Dislikes
/**
 * It takes a videoId, finds the video in the database, increments the dislikes by 1, and returns true
 * if the update was successful.
 * @param videoId - The id of the video that is being liked.
 * @returns a promise.
 */
const updateVideoDislikes = async (videoId) => {
  const video = await Videos.findById(videoId);
  if (video) {
    const dislikes = video.dislikes;
    return await Videos.findByIdAndUpdate(videoId, {
      dislikes: dislikes + 1,
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

/**
 * It takes a videoId and playlistId and updates the video with the playlistId.
 * @param videoId - The id of the video you want to add to the playlist
 * @param playlistId - 5f0f8f8f8f8f8f8f8f8f8f8f
 * @returns The result of the promise.
 */
const updatePlaylistVideo = async (videoId, playlistId) => {
  return await Videos.findByIdAndUpdate(videoId, {
    playlist: playlistId,
  })
    .then((result) => {
      return true;
    })
    .catch((err) => {
      return err.message;
    });
};

export {
  updateVideoUrl,
  updateVideoViews,
  updateVideoLikes,
  updateVideoDislikes,
  updatePlaylistVideo,
};
