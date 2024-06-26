const express = require("express");

const productRouter = require("./Routes/productsRoutes");

const app = express();
app.use(express.json());

app.use( (req,res,next) => {
    console.log(res,req method);
    next();
})

app.use("/products", productRouter);

app.listen(4000);