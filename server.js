
const express = require("express");
const app = express(); // start an express app
const port = process.env.PORT || 5500;
const path = require("path"); // window or mac
const router = express.Router();


// Middlewares
    // app.use()

// Static Files
    // HTML
    // JavaScript
    // CSS
    // ETC
app.use(express.static("public")); // sending static files 


app.use("/", router);


app.listen(port, () => {
    console.log("App is starting at port ", port);
}); // required



router.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, "views/index.html"));
});


router.get('/aboutme', (request, response) => {
    response.sendFile(path.join(__dirname, "views/aboutme.html"));
});
router.get('/thankyou', (request, response) => {
    response.sendFile(path.join(__dirname, "views/thankyou.html"));
});

router.get("*", (req, res) => {
    res.json("Page not found");
});



