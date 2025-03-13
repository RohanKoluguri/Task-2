const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Handle form submission with server-side validation
app.post("/submit", (req, res) => {
    const { name, email } = req.body;

    // Server-side validation
    if (!name || !email.includes("@")) {
        return res.send(`<h1>Invalid Input!</h1><a href="/">Go Back</a>`);
    }

    res.send(`<h1>Thank You, ${name}!</h1><p>Your email: ${email}</p><a href="/">Go Back</a>`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
