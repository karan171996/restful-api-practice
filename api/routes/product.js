const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Hello",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "Hello",
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "special") {
    res.status(200).json({
      message: "Special",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "Passed Id",
    });
  }
});

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Updated product",
  });
});

router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Delete product",
  });
});
module.exports = router;
