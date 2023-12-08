const express = require("express");
const { createUser } = require("../Controller/userData.js");
const { getUser } = require("../Controller/userData.js");
const { deleteUser } = require("../Controller/userData.js");
const router = express.Router();
exports.route = () => {
  // router.post("/user", createUser);
  router.get("/alluser", getUser);
  router.delete("/user/:id", deleteUser);
  return router;
};
