var express = require("express");
var router = express.Router();
router.use(express.json());

router.get("/", (req, res) => {
  res.render("form", {
    name: req.params.inputName,
    email: req.params.inputEmail,
    address: req.params.inputAddress,
  });
});

module.exports = router;
