const posts = [
  {
    id: 1,
    title: "Corruption in Kenya",
    content: "Post one",
    author: "Muthama Caleb",
    date: new Date(),
    tags: "Politics",
  },
  {
    id: 2,
    title: "Floods in Kenya",
    content: "Post two",
    author: "Muthama Caleb",
    date: new Date(),
    tags: "Politics",
  },
  {
    id: 3,
    title: "Adani Group in Kenya",
    content: "Post Three.",
    author: "Muthama Caleb",
    date: new Date(),
    tags: "Politics",
  },
];

//@desc  Get all posts
//route  GET /api/posts
//Private
const getAllPosts = (req, res) => {
  res.status(200).json(posts);
};

//@desc  Create a posts
//route  POST /api/posts
//Private
const createPost = (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ message: "Please add content for the blog" });
  }
  res.status(200).json({ message: "Created a post" });
};

//@desc  PUT a posts
//route  PUT /api/posts/:id
//Private
const updatePost = (req, res) => {
  res.status(200).json({ message: `Updated post: ${req.params.id}` });
};

//@desc  Delete a posts
//route  DELETE /api/posts/:id
//Private
const deletePost = (req, res) => {
  res.status(200).json({ message: `Updated post: ${req.params.id}` });
};

export { getAllPosts, createPost, updatePost, deletePost };
