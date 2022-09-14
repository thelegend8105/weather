const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const weather = require("./weather.js");

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/display.html"));
})

app.get('/style', (req, res) => {
    res.sendFile(path.join(__dirname, "/style.css"));
})

app.get('/data', (req, res) => {
    res.sendFile(path.join(__dirname, "/clientScript.js"));
})
app.get('/weather', (req, res) => {
    weather.getWeather().then(data => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    })
})
app.use("/assets", express.static("assets"));

app.listen(3000, () => console.log("Started Express server"));