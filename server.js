
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


router.get('/sobre-mim', (request, response) => {
    response.sendFile(path.join(__dirname, "views/aboutme.html"));
});
router.get('/enviado-sucesso', (request, response) => {
    response.sendFile(path.join(__dirname, "views/thankyou.html"));
});

router.get('/contactos', (request, response) => {
    response.sendFile(path.join(__dirname, "views/contacts.html"));
});
router.get('/faq', (request, response) => {
    response.sendFile(path.join(__dirname, "views/faq.html"));
});
router.get('/servicos', (request, response) => {
    response.sendFile(path.join(__dirname, "views/servicos.html"));
});


router.get("*", (req, res) => {
    res.json("Page not found");
});



