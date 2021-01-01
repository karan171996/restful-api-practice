const express = require("express");

const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const productRoutes = require("./api/routes/product");
const orderRouter = require("./api/routes/orders");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/products", productRoutes);
app.use("/orders", orderRouter);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
