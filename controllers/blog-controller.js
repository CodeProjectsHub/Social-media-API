const Blog = require("../model/blog");
const User = require("../model/user");
const mongoose = require("mongoose");

const getAllBlogs = async (req, res, next) => {
  //to get all blogs
  let blogs;
  try {
    blogs = await Blog.find();
  } catch (err) {
    return err;
  }
  if (!blogs) {
    return res.status(404).json({ message: "No Blogs found!" });
  }
  return res.status(200).json({ blogs });
};

const addBlog = async (req, res, next) => {
  //to add/create a new blog
  const { title, description, image, user } = req.body;
  const blog = new Blog({ title, description, image, user });
  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (err) {
    console.log(err);
  }
  if (!existingUser) {
    return res
      .status(400)
      .json({ message: "Unable to find user by this id.." });
  }
  try {
    const session = await mongoose.startSession(); //defining a session to save a new blog and add that blog to blog array of user
    session.startTransaction();
    await blog.save({ session });
    existingUser.blogs.push(blog);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
  return res.status(200).json({ blog });
};
const updateBlog = async (req, res, next) => {
  //to update a blog
  const { title, description } = req.body;
  const blogId = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogId, { title, description }); //can update only the title and the description
  } catch (err) {
    return console.log(err);
  }
  if (!blog) {
    return res.status(500).json({ message: "unable to update the blog" });
  }
  return res.status(200).json({ blog });
};

const getById = async (req, res, next) => {
  let blogId;
  //to get a blog by its id
  blogId = req.params.id;
  let blog;
  try {
    blog = await Blog.findById(blogId);
  } catch (err) {
    console.log(err);
  }
  if (!blog) {
    return res.status(404).json({ message: "Blog not found!" });
  }
  return res.status(200).json({ blog });
};

//to findbyid and delete a blog
const deleteBlog = async (req, res, send) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndRemove(id).populate("user"); //this will populate the user key of the blog
    await blog.user.blogs.pull(blog); //go to the user from that blog anf the blogs array of the user and remove this blog
    await blog.user.save();
  } catch (err) {
    console.log(err);
  }
  if (!blog) {
    return res
      .status(500)
      .json({ message: "Unable to find the blog and delete!" });
  }
  return res.status(200).json({ message: "Successfully deleted" });
};

//Get an user's blog by his/her ID
const getUserBlogsByID = async (req, res, next) => {
  let userId = req.params.id;
  let userBlogs;
  try {
    userBlogs = await User.findById(userId).populate("blogs");
  } catch (err) {
    comsole.log(err);
  }
  if (!userBlogs) {
    return res.status(404).json({ message: "No Blogs Found" });
  }
  return res.status(200).json({ blogs: userBlogs });
};
module.exports = {
  getAllBlogs,
  addBlog,
  updateBlog,
  getById,
  deleteBlog,
  getUserBlogsByID,
};
