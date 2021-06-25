const express = require("express");
const router = express.Router();

//-------- ROUTES ---------//
//Get routes
router.get("/", (req, res) => {
  res.status(200).json({
    message: "base route",
  });
});

//Export the module
module.exports = router;
