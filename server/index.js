require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const port = 3000;

const app = express();

app.use(bodyParser());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET
  })
);

app.use(express());

app.listen(port, () => {
  console.log(`Listening on Port${port}`);
});
