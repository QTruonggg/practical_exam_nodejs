const express = require("express");
let router = express.Router();
let userController = require("../controllers/user.controller");
router.get("/",userController.get);
router.get("/createUser",userController.createForm);
router.post("/createUser",userController.save);

module.exports = router;