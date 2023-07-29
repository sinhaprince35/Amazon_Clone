const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) throw new Error("Not valid email address");
    },
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    maxlength: 10,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  cpassword: {
    type: String,
    required: true,
    minlength: 6,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  carts: Array,
});

const USER = new mongoose.model("USER", userSchema);

userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
})

module.exports = USER;
