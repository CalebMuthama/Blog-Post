import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`Connected to MongoDB: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
