const express = require("express");
const router = express.Router();
const { check } = require("express-validator/check");

const JsMoney = require("../middleware/jsmoney");

const responseMiddleware = (req, res, next) => {
  return res.json(req.responseValue);
};
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Js Money" });
});

router.post(
  "/transactions/new",
  [
    check("sender", "Sender must be a String").exists(),
    check("recipient", "Sender must be a String").exists(),
    check("amount", "Sender must be a Int Value")
      .isInt()
      .exists()
  ],
  JsMoney.newTransaction,
  responseMiddleware
);

router.get("/mine", JsMoney.mine, responseMiddleware);

router.get("/chain", JsMoney.getChain, responseMiddleware);

module.exports = router;
