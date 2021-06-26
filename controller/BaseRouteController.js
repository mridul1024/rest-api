const { json } = require("express");

class BaseRouteController {
  getAllRoutes(req, res) {
    console.log("inside function");
    return res.json({ "get api key": "/get-api-key" });
  }
}

module.exports = BaseRouteController;
