
const express = require("express");
const app = express(); // start an express app
const port = process.env.PORT || 5500;
const router = require("./routes/routing");


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






