var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// GET hello page
router.get("/hello/:firstname/:lastname", (req, res, next) => {
  res.render("hello", {
    firstname: req.params.firstname,
    lastname: req.params.lastname,
  });
});

// GET form page
router.get("/form", (req, res, next) => {
  console.log(req.body);
  res.render("form", { users: "Anderson" });
});

module.exports = router;
