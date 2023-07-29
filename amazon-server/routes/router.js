const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

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

//Get individual data
router.get("/getproductsone/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);

    const individualdata = await Products.findOne({ id: id });

    // console.log(individualdata +"individual data");

    res.status(201).json(individualdata);
  } catch (error) {
    res.status(400).json(individualdata);
    console.log("Error" + error.message);
  }
});

//User register api

router.post("/register", async (req, res) => {
  // console.log(req.body);

  const { fname, email, mobile, password, cpassword } = req.body;
  if (!fname || !email || !mobile || !password || !cpassword) {
    res.status(422).json({ error: "Fill all the data" });
  }
  try {
    const preuser = await USER.findOne({ email: email });
    if (preuser) {
      res.status(422).json({ error: "This user is already register" });
    } else if (password !== cpassword) {
      res
        .status(422)
        .json({ error: "Password and Confirmed Password not matched" });
    } else {
      const finalUser = new USER({
        fname,
        email,
        mobile,
        password,
        cpassword,
      });
      //Password hashing process using bcrypt
      const storedata = await finalUser.save();
      console.log(storedata);
      res.status(201).json(storedata);
    }
  } catch (error) {}
});

// Login user api

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "Fill all the data" });
  }
  try {
    const userlogin = await USER.findOne({ email: email });
    // console.log(userlogin + "user value")

    if (userlogin) {
      const isMatch = await bcrypt.compare(password, userlogin.password);
      // console.log(isMatch);

      //Token generate
      const token = await userlogin.generateAuthtokenn();
      // console.log(token);

      res.cookie("Amazonweb", token, {
        expires: new Date(Date.now() + 900000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid details" });
      } else {
        res.status(201).json(userlogin);
      }
    } else {
      res.status(400).json({ error: "User not registered" });
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid crediential pass" });
  }
});

//Adding the data into cart
router.post("/addcart/:id", authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Products.findOne({ id: id });
    console.log(cart + "cart value");

    const UserContact = await USER.findOne({ _id: req.userID });
    console.log(UserContact);

    if (UserContact) {
      const cartData = await UserContact.addcartdata(cart);
      await UserContact.save();
      console.log(cartData);
      res.status(201).json(UserContact);
    } else {
      res.status(401).json({ error: "Invalid user" });
    }
  } catch (error) {
    res.status(401).json({ error: "Invalid user" });
  }
});

module.exports = router;
