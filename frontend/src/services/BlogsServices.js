import Api from "./Api";

export default {
  getAllBlogs() {
    return Api().get("/api/posts");
  },
  getPost(blogId) {
    return Api().get(`/api/posts/${blogId}`);
  },
  createPost(newBlog) {
    return Api().post("/api/posts", newBlog);
  },
  updatePost(blogId, blog) {
    return Api().put(`/api/posts/${blogId}`, blog);
  },
  deletePost(blogId) {
    return Api().delete(`/api/posts/${blogId}`);
  },
};
