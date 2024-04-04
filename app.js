"use strict";
const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");

app.use(multer().none());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

const profileRouter = require("./routes/profile.route");

app.use("/public", express.static('public'));

app.use("/", profileRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("App listening at http://localhost:" + PORT);
});