const express = require("express");
const router = express.Router();

//! Get routes
//* First base route
router.get("/", (req, res) => {
  res.send("Blog API");
});

//Export the module
module.exports = router;
