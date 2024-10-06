import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: String,
    imageURL: String,
    author: String,
    content:  String,
    category: String,
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Blog", blogSchema);
