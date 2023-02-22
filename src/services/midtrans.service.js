/* Importing the dotenv and base64 library. */
import "dotenv/config";
import base64 from "base-64";

/* Encoding the server key. */
const AUTH_STRING = base64.encode(
  process.env.SANDBOX_MIDTRANS_SERVER_KEY + ":"
);

/* A constant variable that contains the header of the request. */
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: "Basic " + AUTH_STRING,
};

export default headers;
