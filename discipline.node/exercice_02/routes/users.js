const express = require("express");
const router = express.Router();
router.use(express.json());

const users = { items: [] };

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", function (req, res, next) {
  users.items.push(req.body);
  res.send("Ok!");
});

router.delete("/:email", (req, res) => {
  let index = users.items.findIndex((e) => e.email == req.params.email);
  users.items.splice(index, 1);
  res.send("Ok!");
});

module.exports = router;
