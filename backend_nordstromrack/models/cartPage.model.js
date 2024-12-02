const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {},
  {
    timestaps: true,
    // collection: "cart",
    // strict: false,
    versionKey:false,

  }
  
);
const CartModel = mongoose.model("cart", cartSchema);
module.exports = CartModel;
