const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Orders fetched",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    mesage: "Order was created",
  });
});

router.get("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Orders details fetched",
    orderId: req.params.orderId,
  });
});

router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Orders details detailed",
    orderId: req.params.orderId,
  });
});
module.exports = router;
