/* Importing the database and the playlists collection. */
import mailgun from "mailgun-js";
import db from "../models/index.js";
const Messages = db.messages;
const RepliedMessages = db.repliedMessages;

// Import dotenv
import "dotenv/config";

/**
 * It sends an email to the user's email address
 * @param email - The email address of the recipient.
 * @param message - The message you want to send.
 * @param subject - The subject of the email
 * @returns {
 *   "message": "Email sent",
 *   "data": {
 *     "id": "&lt;20200506095006.1.D9D9D9D9D9D9D9D9@kamuscrypto.id&gt;",
 *     "message": "Queued. Thank you."
 *   }
 * }
 */
const sendMail = async (email, message, subject) => {
  const DOMAIN = process.env.MAILGUN_DOMAIN;
  const API_KEY = process.env.MAILGUN_API_KEY;
  const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });
  const data = {
    from: "Admin < admin@kamuscrypto.id >",
    to: email,
    subject: `Re: ${subject}`,
    html: `
      <div style="background-color: #f5f5f5; padding: 20px;">
        <div style="background-color: #fff; padding: 20px; border-radius: 5px;">
          <h1 style="font-size: 20px; font-weight: 600; color: #333; margin-bottom: 10px;">${subject}</h1>
          <p style="font-size: 14px; font-weight: 400; color: #333; margin-bottom: 10px;">${message}</p>
          </div>
          </div>
          `,
  };

  const response = await mg
    .messages()
    .send(data)
    .then((body) => {
      return "Email sent";
    })
    .catch((error) => {
      return error.message;
    });

  return response;
};

/**
 * It sends an email to the user and saves the message in the database
 * @param userId - The id of the user who sent the message
 * @param messageId - The id of the message to be replied to.
 * @param email - The email address of the user you want to send the message to.
 * @param subject - The subject of the email
 * @param message - The message to be sent
 * @returns a promise.
 */
const replyMessage = async (userId, messageId, email, subject, message) => {
  const response = await sendMail(email, message, subject);

  if (response === "Email sent") {
    const reply = new RepliedMessages({
      userId,
      messageId,
      message,
    });

    await reply.save();

    await Messages.findByIdAndUpdate(
      messageId,
      {
        status: "Replied",
      },
      { new: true }
    );

    return "Message replied successfully.";
  } else {
    return response;
  }
};

export default replyMessage;
