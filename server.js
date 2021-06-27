/**
 * * Server file
 *
 * Todo: Add authRoute
 * Todo: Add json body parser
 *
 */

const express = require("express");
const app = express();

//Routes
const baseRoute = require("./routes/BaseRoute");

//Port number
const port = process.env.PORT || 3000;

app.use("/", baseRoute);

app.listen(port, (req, res) => {
  console.log(`Server started on port : ${port}`);
});
