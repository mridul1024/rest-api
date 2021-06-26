const express = require("express");
const router = express.Router();
const baseRouteController = require("../controller/BaseRouteController.js");
const BaseRouteController = new baseRouteController();

//-------- ROUTES ---------//
//Get routes
router.get("/", (req, res) => {
  return BaseRouteController.getAllRoutes(req, res);
});

//Export the module
module.exports = router;
