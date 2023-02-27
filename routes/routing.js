const express = require("express");
const path = require("path"); // window or mac
const router = express.Router();


// Define any routes

// app.get()
// app.post()

// router.get();
// router.post();

// 2 paramaters
// req.params
// req.param

router.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, "/../views/index.html"));
});


router.get('/aboutme', (request, response) => {
    response.sendFile(path.join(__dirname, "/../views/aboutme.html"));
});
router.get('/thankyou', (request, response) => {
    response.sendFile(path.join(__dirname, "/../views/thankyou.html"));
});

router.get("*", (req, res) => {
    res.json("Page not found");
});


// router.get("/", func,  (req, res) => {

// }));
module.exports = router;


