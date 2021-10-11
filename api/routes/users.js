var express = require("express");
var router = express.Router();
const User = require("../models/user");

/* GET users listing. */
router.post("/:postId", async (req, res) => {
  const user = await User.updateOne(
    { _id: "6161ff21f56ed0001189c68b" },
    { saved_search_sites: ["foo", "bar"] }
  );
  console.log(user);
  res.send("hi");
});

module.exports = router;
