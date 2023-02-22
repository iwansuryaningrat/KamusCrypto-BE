/* Importing the models from the index.js file in the models folder. */
import db from "../models/index.js";
const Liveclass = db.liveclass;
const LiveclassTransactions = db.liveclassTransactions;
const MembershipTransactions = db.membershipTransactions;
const Messages = db.messages;
const News = db.news;
const Plans = db.plans;
const Playlists = db.playlists;
const Referrals = db.referrals;
const RepliedMessages = db.repliedMessages;
const Services = db.services;
const Subscribers = db.subscribers;
const Teams = db.teams;
const Testimoni = db.testimoni;
const Users = db.users;
const Videos = db.videos;
const Vouchers = db.vouchers;

// Count Data
/**
 * It counts the number of documents in a collection and returns the number of documents, the number of
 * documents per page, and the number of pages.
 * @param Model - The model you want to query
 * @param itemPerPage - the number of items per page
 * @param condition - is the condition to filter the data
 * @returns { dataCount, dataPerPage: itemPerPage, pageCount }
 */
const dataCounter = async (Model, itemPerPage, condition) => {
  let dataCount = 0;
  if (condition == undefined || condition == null || condition == {}) {
    dataCount = await Model.countDocuments({})
      .then((docCount) => {
        return docCount;
      })
      .catch((err) => {
        return err.message;
      });
  } else {
    dataCount = await Model.where(condition)
      .countDocuments({})
      .then((docCount) => {
        return docCount;
      })
      .catch((err) => {
        return err.message;
      });
  }

  const pageCount = Math.ceil(dataCount / itemPerPage);
  return { dataCount, dataPerPage: itemPerPage, pageCount };
};

export default dataCounter;
