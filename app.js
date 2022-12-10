// import dependecies
import express from "express";
const app = express();

// configure database

// create a user route
app.post("/users", (req, res) => {
  res.status(200).send("Users");
});

// create actions route
app.put("/actions/", (req, res) => {
  res.status(200).send("Adding User...");
});

// start server
app.listen(4000);
