const express = require("express");
const port = 8000;
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());

const games = [
    {title: "Tekken", genre: "Fighting", console: "Multi", studio: "Com?"},
    {title: "Cyberpunk 2077", genre: "cyberpunk", _console: "Multi", studio: "CD Projekt Red"}
];

app.get("/games/", (req, res) => {
    res.json( games);
});

app.get("/games/:id", (req, res) => {
    res.json( games[req.params.id]);
});
app.put("/games/:id", (req, res) => {
    games[req.params.id] = req.body;
    res.json( {"status": "ok"});
});

app.post("/games", (req, res) =>
{
    games.push(req.body);
    res.json({"status": "ok"})
})
app.delete("/games/:id", (req, res) => {
    games.splice([req.params.id], 1);
    res.json({"status": "ok"});
});

app.listen(port, ()=> console.log(`listening on port ${port}`));


