const express = require("express");
const {
  getAllBlogs,
  addBlog,
  updateBlog,
  getById,
  deleteBlog,
  getUserBlogsByID,
} = require("../controllers/blog-controller");
const blogRouter = express.Router();
blogRouter.get("/", getAllBlogs); //./ is for all routes
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog); //id is variable
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteBlog);
blogRouter.get("/user/:id", getUserBlogsByID);

module.exports = blogRouter;
