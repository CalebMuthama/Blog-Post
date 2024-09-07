import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import posts from "./routes/postRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

connectDB();

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8000;

app.use("/api/posts", posts);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`The server is up and running on port: ${PORT}`)
);
