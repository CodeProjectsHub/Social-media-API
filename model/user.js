//to make the model of the user
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  blogs: [{ type: mongoose.Types.ObjectId, ref: "Blog", required: true }], // one user can have multiple blogs, ref:Blog refers to the Blog collection
});
const User = mongoose.model("User", userSchema);

module.exports = User;
