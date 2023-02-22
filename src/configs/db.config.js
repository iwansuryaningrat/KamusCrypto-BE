// Load .env file
import "dotenv/config";

if (process.env.NODE_ENV === "production") {
  var url = process.env.MONGODB_URI;
} else {
  var url = process.env.MONGODB_URI_DEV;
}

// MongoDB configuration
const dbConfig = {
  url: url,
};

export default dbConfig;
