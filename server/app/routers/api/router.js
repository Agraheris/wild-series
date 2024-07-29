const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);


/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const itemsRouter = require("./items/router");

const {browse} = require("../../controllers/programActions")



router.use("/items", itemsRouter);

router.get("/programs", browse)



/* ************************************************************************* */

module.exports = router;
