const express = require("express");
const { getAllUser, signup, login } = require("../controllers/user-controller");

//mport getAllUser from "../controllers/user-controller";

const router = express.Router();
router.get("/", getAllUser); //./ is for all routes
router.post("/signup", signup);
router.post("/login", login);
module.exports = router;
