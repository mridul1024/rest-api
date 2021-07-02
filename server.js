/**
 * * Server file
 *
 */

const express = require("express");
const app = express();
const mongoose = require("mongoose");

//db connection
mongoose.connect(
  process.env.DATABASE_URL ||
    "mongodb+srv://restuser:restuser@cluster0.01o6g.mongodb.net/blog_db?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//db event handlers
const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to database.");
});
db.on("error", (err) => {
  console.log(`Error: ${err}`);
});

//Routes
const baseRoute = require("./routes/BaseRoute");
const authRoute = require("./routes/auth");
const articleRoute = require("./routes/articles");

//Port number
const port = process.env.PORT || 3000;

//Adding json body parser
app.use(express.json());

app.use("/", baseRoute);
app.use("/auth", authRoute);
app.use("/articles", articleRoute);

app.listen(port, (req, res) => {
  console.log(`Server started on port : ${port}`);
});
