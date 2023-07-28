const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");

//get productsdata api
router.get("/getproducts", async (req, res) => {
  try {
    const productsdata = await Products.find();
    // console.log("console the data"+productsdata);
    res.status(201).json(productsdata);
  } catch (error) {
    console.log("Error" + error.message);
  }
});

module.exports = router;
