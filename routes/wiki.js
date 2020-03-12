const router = require('express').Router()
// const client = require()
// const {db} = require('./models');

router.get("/", (req, res, next) => {
    try {
        res.send("doo doo")
  } catch (error) { next(error) }
});

// router.post("/", async (req, res, next) => {
//     try {

//   } catch (error) { next(error) }
// });

// router.get("/add", async (req, res, next) => {
//     try {

//   } catch (error) { next(error) }
// });

module.exports = router;


// would be in app.js
// const wikiRouter = require(/routes/wiki.js)