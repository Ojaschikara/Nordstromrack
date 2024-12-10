const mongoose = require("mongoose");

const cartSchema =  new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product", // Reference to the Product model
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
          min: 1,
        },
      },
    ],
  },
  {
    versionKey: false, // Disable the __v field
    timestamps:true
  }
);
const CartModel = mongoose.model("cart", cartSchema);
module.exports = CartModel;
