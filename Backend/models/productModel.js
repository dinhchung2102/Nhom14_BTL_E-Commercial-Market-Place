const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  product_id: {
    type: Number,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  description: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
