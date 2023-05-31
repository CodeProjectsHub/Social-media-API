const User = require("../model/user"); //importing user model from the model module
const bcrypt = require("bcryptjs"); //to hash user's password

const getAllUser = async (req, res, next) => {
  // this to get all users in database
  let users;
  try {
    //always use try catch for any database operations
    users = await User.find(); //this is a mongoose function to find users, we can apply filters to this as well. This is asynchronous as most of the database operations
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    res.status(400).json({ message: "No users found" });
  }
  return res.status(200).json({ users });
};

const signup = async (req, res, next) => {
  //   if (req.body) {
  //     const { name, email, password } = req.body;
  //     //console.log(name, email, password);

  //     // Further processing...
  //   } else {
  //     return res.status(400).json({ error: "Invalid request body" });
  //   }

  const { name, email, password } = req.body; //destructuring json
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res
      .status(401)
      .json({ message: "User Already exists. Try to login instead!" });
  }
  const hashedPassword = bcrypt.hashSync(password); //synchronously generates the hash for given string
  const user = new User({ name, email, password: hashedPassword, blogs: [] });
  //console.log(user.name);
  try {
    await user.save();
  } catch (err) {
    console.log("error coz can't save" + err);
    return err;
  }
  return res.status(201).json({ user });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res
      .status(404)
      .json({ message: "Couldn't find an user with this email!" });
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect Password!" });
  }
  return res.status(200).json({ message: "Login Successfull" });
};

module.exports = { getAllUser, signup, login };
