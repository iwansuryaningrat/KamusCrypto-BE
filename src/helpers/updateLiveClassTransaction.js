import db from "../models/index.js";
const LiveClassTransactions = db.liveclassTransactions;

const updateStatus = async (paymentCode, status) => {
  try {
    await LiveClassTransactions.findOneAndUpdate(
      paymentCode,
      {
        transactionStatus: status,
      },
      { new: true }
    )
      .then((result) => {
        return true;
      })
      .catch((err) => {
        return false;
      });
  } catch (err) {
    return false;
  }
};

const updateLiveClassTransaction = async (
  transaction_status,
  order_id,
  fraud_status
) => {
  if (transaction_status == "capture") {
    if (fraud_status == "challenge") {
      // TODO set transaction status on your database to 'challenge'
      const update = await updateStatus(order_id, "Challenge");
      if (update) {
        return true;
      } else {
        return false;
      }
      // and response with 200 OK
    } else if (fraud_status == "accept") {
      // TODO set transaction status on your database to 'success'
      const update = await updateStatus(order_id, "Success");
      if (update) {
        return true;
      } else {
        return false;
      }
      // and response with 200 OK
    }
  } else if (transaction_status == "settlement") {
    // TODO set transaction status on your database to 'success'
    const update = await updateStatus(order_id, "Success");
    if (update) {
      return true;
    } else {
      return false;
    }
    // and response with 200 OK
  } else if (
    transaction_status == "cancel" ||
    transaction_status == "deny" ||
    transaction_status == "expire"
  ) {
    // TODO set transaction status on your database to 'failure'
    const update = await updateStatus(order_id, "Failed");
    if (update) {
      return true;
    } else {
      return false;
    }
    // and response with 200 OK
  } else if (transaction_status == "pending") {
    // TODO set transaction status on your database to 'pending' / waiting payment
    const update = await updateStatus(order_id, "Pending");
    if (update) {
      return true;
    } else {
      return false;
    }
    // and response with 200 OK
  }
};

export default updateLiveClassTransaction;
