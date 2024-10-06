import Api from "./Api";

export default {
  getAllPosts(search) {
    return Api().get("/api/posts", {
      params: {
        search: search,
      },
    });
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
