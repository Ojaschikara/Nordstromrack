const mongoose = require("mongoose");


const productSchema = new mongoose.Schema(
  {
    // count:Number
  },
  {
    timestamps: true, 
    // collection: "products",
    // strict: false, 
    versionKey:false   
  }
);

const ProductModel = mongoose.model("products", productSchema);
module.exports = ProductModel;
