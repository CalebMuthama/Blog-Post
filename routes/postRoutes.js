import express from "express";
import {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  getPost,
} from "../controller/postController.js";

const router = express.Router();

router.route("/").get(getAllPosts).post(createPost);
router.route("/:id").get(getPost).put(updatePost).delete(deletePost);

export default router;
