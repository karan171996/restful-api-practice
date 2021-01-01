const express = require("express");

const app = express();

const productRoutes = require("./api/routes/product");
const orderRouter = require("./api/routes/orders");

app.use("/products", productRoutes);
app.use("/orders", orderRouter);

module.exports = app;
