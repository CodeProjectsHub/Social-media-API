const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId, //type of user
    ref: "User", //each blog can have only one user ref:User referes to User collection in mongodb
    required: true,
  },
});
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
