require("dotenv").config();
require("./database/db");

const express = require("express");

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`App Started on :${process.env.PORT}`);
});