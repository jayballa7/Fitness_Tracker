const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(logger("dev"));

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));


app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });

  