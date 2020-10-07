const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts");

router.get("/", function (req, res) {
  res.send("Hello, World!");
  res.end();
});

router.get("/post", postController.getPost);

module.exports = router;
