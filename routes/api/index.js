const router = require("express").Router();
const bookRoutes = require("./books");

//Routes for books
router.use("/books", bookRoutes);

module.exports = router;
