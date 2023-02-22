/* Importing the liveclass model from the index.js file in the models folder. */
import db from "../models/index.js";
const Liveclass = db.liveclass;

// Add User to Liveclass's Participant (Done)
/**
 * It takes a userID and a liveclassId, finds the liveclass, increments the participantsCount, adds the
 * userID to the participantsList, and saves the liveclass.
 * @param userID - the user's ID
 * @param liveclassId - the id of the liveclass
 * @returns A promise.
 */
const addParticipant = (userID, liveclassId) => {
  const liveclass = Liveclass.findById(liveclassId)
    .then((liveclass) => {
      if (!liveclass) {
        return false;
      }
      liveclass.participants.participantsCount++;
      liveclass.participants.participantsList.push({ userID });
      liveclass.save();
      return true;
    })
    .catch((err) => {
      return false;
    });

  return liveclass;
};

export default addParticipant;
