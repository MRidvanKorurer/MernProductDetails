const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    price: Number,
    discount: Number,
    image: String,
    colors: [
      {
        type: String,
      },
    ],
    sizes: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
