import db from "../../models/index.js";
const Playlists = db.playlists;
const Videos = db.videos;

/**
 * Delete all playlists and videos from the database.
 * @returns A function that returns a promise.
 */
const deleteAll = async () => {
  try {
    await Playlists.deleteMany({});
    await Videos.deleteMany({});
    return true;
  } catch (error) {
    return false;
  }
};

export default deleteAll;
