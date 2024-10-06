import Blog from "../models/blogSchema.js";

//@desc  Get all posts
//route  GET /api/posts
//Private
const getAllPosts = async (req, res) => {
  try {
    let posts;
    const search = req.query.search;
    if (search) {
      posts = await Blog.find({
        $or: [
          { title: { $regex: search, $options: "i" } },
          { author: { $regex: search, $options: "i" } },
          { category: { $regex: search, $options: "i" } },
        ],
      });
    } else {
      posts = await Blog.find().limit(10);
    }


    

    res.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "An error occured while fetching the blogs.",
    });
  }
};

//Get a single post based on the blogID

const getPost = async (req, res) => {
  try {
    const blogId = req.params.id;

    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(400).json({
        error: `No blog matches the ID: ${blogId}`,
      });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({
      error: "An error occured while fetching this blog post.",
    });
  }
};

//@desc  Create a posts
//route  POST /api/posts
//Private
const createPost = async (req, res) => {
  try {
    const post = await Blog.create({
      title: req.body.title,
      imageURL: req.body.imageURL,
      author: req.body.author,
      content: req.body.content,
      date: req.body.date,
      category: req.body.category,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({
      error: "An error occured while trying to create a blog.",
    });
    console.log(error.message);
  }
};

//@desc  PUT a posts
//route  PUT /api/posts/:id
//Private
const updatePost = async (req, res) => {
  try {
    const blogId = await Blog.findById(req.params.id);

    if (!blogId) {
      res.status(400).json({ message: `Blog of id:${blogId} was not found` });
    }

    const updatedPost = await Blog.findByIdAndUpdate(blogId, req.body, {
      new: true,
    });

    res.status(200).json(updatedPost);
  } catch (error) {
    console.log(error.message);
  }
};

//@desc  Delete a posts
//route  DELETE /api/posts/:id
//Private
const deletePost = async (req, res) => {
  try {
    const blogId = await Blog.findById(req.params.id);

    if (!blogId) {
      res.status(400).json({ message: `Blog of id:${blogId} was not found` });
    }

    const deletedPost = await Blog.deleteOne(blogId);
    res.status(200).json(deletedPost);
  } catch (error) {
    console.log(error.message);
  }
};

export { getAllPosts, getPost, createPost, updatePost, deletePost };
