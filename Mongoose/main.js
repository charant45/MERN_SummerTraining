require("dotenv").config();
require("./database/db");

const express = require("express");
const { productsCollection } = require("./database/db");

const app = express();

app.get("/products", async(req,res) => {
  const products = await productsCollection.find().toArray;
  const product = await productsCollection.findOne();
  console.log("\n✅:products",products);
})

app.listen(process.env.PORT, () => {
  console.log(`App Started on :${process.env.PORT}`);
});

