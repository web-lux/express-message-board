const express = require("express");

const app = express();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index", { messages: messages })
});

app.get("/new", (req, res) => {
    res.render("new")
});

app.use((req, res) => {
    res.render("404")
})

app.listen(3000, () => {
    console.log("Listening on port 3000...")
});