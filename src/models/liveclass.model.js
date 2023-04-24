export default (mongoose) => {
  const Schema = mongoose.Schema;
  const liveclassSchema = new Schema(
    {
      title: {
        type: String,
        require: true,
      },
      number: {
        type: Number,
      },
      liveclassCode: {
        type: String,
        require: true,
        unique: true,
      },
      price: {
        type: Number,
        require: true,
        default: 0,
      },
      discount: {
        type: Number,
        require: true,
        default: 0,
      },
      totalPrice: {
        type: Number,
        require: true,
        default: 0,
      },
      description: {
        type: String,
        require: true,
      },
      memberType: {
        type: String,
        require: true,
        enum: {
          values: ["Silver", "Gold", "Platinum", "None"],
          message: "Member type must be Silver, Gold, Platinum or None",
        },
        default: "None",
      },
      type: {
        type: String,
        require: true,
        enum: {
          values: ["Free", "Paid"],
          message: "Type must be Free or Paid",
        },
        default: "Paid",
      },
      category: {
        type: String,
      },
      tags: [
        {
          type: String,
        },
      ],
      date: {
        type: Number,
        require: true,
        default: 0,
      },
      time: {
        type: String,
        require: true,
        default: 0,
      },
      location: {
        name: {
          type: String,
          require: true,
        },
        link: {
          type: String,
        },
      },
      duration: {
        type: String,
        require: true,
      },
      mentor: {
        type: String,
      },
      thumbnail: {
        imageAlt: {
          type: String,
          require: true,
          default: "example",
        },
        imageName: {
          type: String,
          require: true,
          default: "example.jpg",
        },
        imageLink: {
          type: String,
          require: true,
          default: "example.jpg",
        },
      },
      benefits: [
        {
          type: String,
          require: true,
        },
      ],
      participants: {
        participantsCount: {
          type: Number,
          require: true,
          default: 0,
        },
        participantsList: [
          {
            userID: {
              type: Schema.Types.ObjectId,
              ref: "Users",
            },
          },
        ],
      },
      status: {
        type: String,
        require: true,
        enum: {
          values: ["Upcoming", "Closed", "Cancelled", "Ongoing", "Completed"],
          message:
            "Status must be Upcoming, Closed, Cancelled, Ongoing or Completed",
        },
        default: "Upcoming",
      },
    },
    { timestamps: true }
  );

  liveclassSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Liveclass = mongoose.model("Liveclasses", liveclassSchema);

  return Liveclass;
};
