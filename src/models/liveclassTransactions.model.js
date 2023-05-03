export default (mongoose) => {
  const Schema = mongoose.Schema;
  const liveclassTransactionSchema = new Schema(
    {
      paymentCode: {
        type: String,
        require: true,
      },
      liveclassId: {
        type: Schema.Types.ObjectId,
        ref: "Liveclasses",
        require: true,
      },
      transactionAmount: {
        type: String,
        require: true,
      },
      transactionDate: {
        type: String,
        require: true,
      },
      transactionStatus: {
        type: String,
        require: true,
        enum: {
          values: ["Pending", "Success", "Failed", "Challenge"],
          message: "Status must be Pending, Success, Failed or Challenge",
        },
        default: "Pending",
      },
      transactionUrl: {
        url: {
          type: String,
        },
        expiredAt: {
          type: String,
        },
      },
      transactionDescription: {
        type: String,
        require: true,
      },
      transactionUser: {
        type: Schema.Types.ObjectId,
        ref: "users",
        require: true,
      },
      voucherCode: {
        type: String,
      },
      transactionNotification: {
        transaction_time: {
          type: String,
        },
        transaction_status: {
          type: String,
        },
        transaction_id: {
          type: String,
        },
        status_message: {
          type: String,
        },
        status_code: {
          type: String,
        },
        signature_key: {
          type: String,
        },
        payment_type: {
          type: String,
        },
        order_id: {
          type: String,
        },
        merchant_id: {
          type: String,
        },
        gross_amount: {
          type: String,
        },
        fraud_status: {
          type: String,
        },
        expiry_time: {
          type: String,
        },
        currency: {
          type: String,
        },
      },
    },
    { timestamps: true }
  );

  liveclassTransactionSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const LiveclassTransactions = mongoose.model(
    "LiveclassTransactions",
    liveclassTransactionSchema
  );

  return LiveclassTransactions;
};
