var express = require("express");
var router = express.Router();

var controller = require("./controller");

/***********************************************/
router.get("/", function(req, res, next) {
  res.send("test auth");
});

router.post("/login", controller.checkBody, (req, res) => {
  res.send({
    body: req.body.username
  });
});

router.get("/check", controller.checkToken, (req, res) => {
  res.send({
    token: req.headers.authorization
  });
});
module.exports = router;