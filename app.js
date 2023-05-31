const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes.js");
const blogRouter = require("./routes/blog-routes.js");
const { getById } = require("./controllers/blog-controller.js");
const app = express();
app.use(express.json()); //to let the application know it has to parse json data
app.use("/api/user", router); //to let the application know we are using router and ./api/user makes sure client hits this path to make their endpoint
app.use("/api/blogs", blogRouter);

const port = 8080;
mongoose
  .connect(
    "mongodb+srv://admin:<password>@cluster0.k18q6gc.mongodb.net/?retryWrites=true&w=majority" //password of the admin user needs to be entered to connect to mongoDB
  )
  .then(() => app.listen(port))
  .then(() => console.log(`Connected to DB and listening on port ${port}`))
  .catch((error) => console.log(error));



//--experimental-modules --es-module-specifier-resolution=node to use ecma in node.js
//npm i bcryptjs will install a library to store hashed passwords in mongodb
