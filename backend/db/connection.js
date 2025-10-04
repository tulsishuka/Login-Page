
// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/mydb");;
//     console.log("MongoDB Connected...");
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// export default connectDB;

// import mongoose from "mongoose";
// import dotenv from "dotenv";

// // Load .env file
// dotenv.config();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB Connected...");
//   } catch (err) {
//     console.error("❌ MongoDB Connection Error:", err.message);
//     process.exit(1);
//   }
// };

// export default connectDB;


import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    console.error("❌ Error: MONGO_URI is not defined in .env file");
    process.exit(1); // Stop the app because MongoDB connection is required
  }

  try {
    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB Connected...");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1); // Stop the app if connection fails
  }
};

export default connectDB;
