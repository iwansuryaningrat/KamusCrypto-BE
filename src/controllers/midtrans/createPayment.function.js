import midtransClient from "midtrans-client";
import "dotenv/config";

/* Importing a function from a file called timeConverter.js. */
import { timeConvertforTransaction } from "../../helpers/timeConverter.js";

// Create Snap API instance
/**
 * This function is used to create a transaction with the midtrans API
 * @param transaction_details - {
 * @param items - [
 * @param customer_details - {
 * @returns {
 *   "status_code": "201",
 *   "status_message": "Created",
 *   "transaction_id": "5f0f9b8f-b8f5-4f0f-9b8f-b8f5f0f9b8f5",
 *   "order_id": "5f0
 */
const createTransaction = async (
  transaction_details,
  items,
  customer_details
) => {
  const env = process.env.NODE_ENV === "production" ? true : false;
  const key = env
    ? process.env.PROD_MIDTRANS_SERVER_KEY
    : process.env.SANDBOX_MIDTRANS_SERVER_KEY;

  let snap = new midtransClient.Snap({
    isProduction: env,
    serverKey: key,
  });

  const time = timeConvertforTransaction(new Date());

  let parameter = {
    transaction_details,
    credit_card: {
      secure: true,
    },
    item_details: items,
    customer_details,
    expiry: {
      start_time: time,
      unit: "hours",
      duration: 1,
    },
  };

  const transaction = await snap.createTransaction(parameter);
  return transaction;
};

export default createTransaction;
