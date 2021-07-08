const express = require("express");
const characterRoutes = require("./routes/character.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/character", characterRoutes);

module.exports = app;
