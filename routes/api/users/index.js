var express = require("express");
var router = express.Router();

const DATA = require("./data.json");

/* GET users page. */
router.get("/", function(req, res, next) {
  res.send(DATA);
});

module.exports = router;
