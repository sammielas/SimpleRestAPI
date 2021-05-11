const express = require("express");
const router = express.Router();

//getting all
router.get("/", (req, res) => {
  res.send("Hello World");
});

//Getting one
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

//Creating One
router.post("/", (req, res) => {});
//Updating One
router.patch("/:id", (req, res) => {});
//Deleting One
router.get("/:id", (req, res) => {});
module.exports = router;
