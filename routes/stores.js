// Bring in express
const express = require("express");

const { getStores, addStore } = require("../controllers/stores");

// Create the router
const router = express.Router();

router
  .route("/")
  .get(getStores)
  .post(addStore);

module.exports = router;
