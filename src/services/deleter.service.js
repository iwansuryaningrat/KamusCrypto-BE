// MongoDB Connection
import connect from "./db.connect.service.js";
connect();

/* Importing the models from the index.js file in the models folder. */
import db from "../models/index.js";
const Certificate = db.certificate;
const Liveclass = db.liveclass;
const LiveclassTransactions = db.liveclassTransactions;
const MembershipTransactions = db.membershipTransactions;
const Messages = db.messages;
const News = db.news;
const Plans = db.plans;
const Playlists = db.playlists;
const PlaylistsTracking = db.playlistsTracking;
const Referrals = db.referrals;
const RepliedMessages = db.repliedMessages;
const Services = db.services;
const Subscribers = db.subscribers;
const Teams = db.teams;
const Testimoni = db.testimoni;
const Users = db.users;
const Videos = db.videos;
const Vouchers = db.vouchers;
const Watchlist = db.watchlist;

/**
 * It deletes all documents from a given Mongoose model.
 * @param Model - The model you want to delete from.
 * @returns A function that takes a model as an argument and returns a promise.
 */
const deleter = async (Model) => {
  try {
    await Model.deleteMany({});
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * It deletes all the data in the Playlists collection and returns a string based on whether the data
 * was deleted or not.
 * @returns A promise.
 */
const deleteData = async () => {
  const isDeleted = await deleter(Liveclass);
  if (isDeleted) {
    return "Deleted";
  } else {
    return "Not Deleted";
  }
};

console.log(await deleteData());
process.exit(0);
