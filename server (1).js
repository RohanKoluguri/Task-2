const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/submit", (req, res) => {
    const { name, message } = req.body;
    res.send(`<h1>Thank You, ${name}!</h1><p>Your message: ${message}</p><a href="/">Go Back</a>`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
