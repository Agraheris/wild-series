const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// Import item-related actions
const { category, readCategories} = require("../../../controllers/categoryActions");

// Route to get a list of programs
router.get("/", category);
router.get("/:id", readCategories);

/* ************************************************************************* */

module.exports = router;