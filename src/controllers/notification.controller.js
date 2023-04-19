import fs from "fs";

// writeFile function with filename, content and callback function
const notificationController = (req, res) => {
  fs.writeFile("./notif.json", req.body, function (err) {
    if (err) throw err;
    res.send({
      message: "File is created successfully.",
    });
  });
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
