const { json } = require("express");

class BaseRouteController {
  getAllRoutes(req, res) {
    console.log("inside function");
    return res.json({ "Base route status": "working" });
  }
}

module.exports = BaseRouteController;
