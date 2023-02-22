import multer from "multer";

// Image Uploader Setup
/* Creating a storage object for multer to use. */
const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./assets/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().getTime() + "-" + file.originalname.replace(/\s/g, "-")
    );
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
