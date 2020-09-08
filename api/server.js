const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.get("/api/accounts", (req, res) => {
  db("accounts")
    .then((users) => res.status(200).json(users).end())
    .catch((err) =>
      res.status(500).json({ message: "failed to retrieve users" }).end()
    );
});

server.get("/api/accounts/:id", (req, res) => {
  //logic to find req.params.id 404 err
  res.send("One accout").end();
});

server.post("/api/accounts", (req, res) => {
  res.send("Woo").end();
  if (req.body.name === "" || req.body.budget === "") {
    res.status(400).json({ message: "Bad Request" }).end();
  } else {
    res.status(500).json({ message: "Back End Went Fucky" });
  }
});
server.put("/api/accounts/:id", (req, res) => {
  res.send("Woo hoo").end();
  //logic to find req.params.id 404 err
  if (req.body.name === "" || req.body.budget === "") {
    res.status(400).json({ message: "Nope" }).end();
  } else {
    res.status(500).json({ message: "Back End Went Fucky" });
  }
});
server.delete("api/accounts/:id", (req, res) => {
  res.send("DELETED").end();
  //log to find req.params.id 404 err
  //res.status 500
});

module.exports = server;
