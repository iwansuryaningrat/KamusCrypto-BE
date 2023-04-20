import updateAccount from "../helpers/updateAccount.js";
import updateLiveClassTransaction from "../helpers/updateLiveClassTransaction.js";
import liveclass from "../helpers/liveclass.js";

// writeFile function with filename, content and callback function
const notificationController = (req, res) => {
  const { transaction_status, order_id, fraud_status } = req.body;
  const code = order_id.split("-");
  const transactionType = code[0];
  const productId = code[1];
  const userId = code[2];
};

const notificationrecurring = (req, res) => {
  fs.writeFile("./recurring.json", req.body, function (err) {
    if (err) throw err;
    res.send({
      message: "File is created successfully.",
    });
  });
};

const notificationpay = (req, res) => {
  fs.writeFile("./pay.json", req.body, function (err) {
    if (err) throw err;
    res.send({
      message: "File is created successfully.",
    });
  });
};

export { notificationController, notificationrecurring, notificationpay };
