import aws from "aws-sdk";
import multerS3 from "multer-s3";

// Set S3 endpoint to DigitalOcean Spaces
const spacesEndpoint = new aws.Endpoint(process.env.DO_SPACES_ENDPOINT);
const s3 = new aws.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.DO_SPACES_KEY,
  secretAccessKey: process.env.DO_SPACES_SECRET,
});
//   destination: (req, file, cb) => {
//     cb(null, "./assets/images");
//   },
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       new Date().getTime() + "-" + file.originalname.replace(/\s/g, "-")
//     );
//   },
// });

/* Creating a new multerS3 object. */
const imageStorage = multerS3({
  s3: s3,
  bucket: "kamuscrypto",
  acl: "public-read",
  key: function (req, file, cb) {
    cb(null, "images/" + file.originalname.replace(/\s/g, "-"));
  },
});

/**
 * If the file is a png, jpg, or jpeg, then the file is valid. Otherwise, it's not.
 * @param req - The request object.
 * @param file - The file that is being uploaded.
 * @param cb - callback function
 */
const imageFileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

export { imageStorage, imageFileFilter };
