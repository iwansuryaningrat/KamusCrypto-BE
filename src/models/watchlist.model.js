export default (mongoose) => {
  const Schema = mongoose.Schema;
  const watchlistSchema = new Schema(
    {
      name: {
        type: String,
        require: true,
      },
      code: {
        type: String,
        require: true,
      },
      date: {
        type: String,
        require: true,
      },
      buyArea: {
        under: {
          type: Number,
          require: true,
        },
        over: {
          type: Number,
          require: true,
        },
      },
      stopLoss: {
        type: Number,
        require: true,
      },
      takeProfit: {
        TP1: {
          type: Number,
          require: true,
        },
        TP2: {
          type: Number,
          require: true,
        },
        TP3: {
          type: Number,
          require: true,
        },
      },
      technicalAnalysis: {
        type: String,
        require: true,
      },
      status: {
        type: String,
        require: true,
        enum: {
          values: ["Active", "Inactive"],
          message: "Status must be Active or Inactive",
        },
        default: "Active",
      },
    },
    { timestamps: true }
  );

  watchlistSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Watchlist = mongoose.model("Watchlists", watchlistSchema);

  return Watchlist;
};
