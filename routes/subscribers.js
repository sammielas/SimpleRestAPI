const express = require("express");
const router = express.Router();

//getting all
router.get("/", (req, res) => {});

//Getting one
router.get("/:id", (req, res) => {
  req.params.id;
});

//Creating One
router.get("/", (req, res) => {});
//Updating One
router.patch("/:id", (req, res) => {});
//Deleting One
router.get("/:id", (req, res) => {});
module.exports = router;
