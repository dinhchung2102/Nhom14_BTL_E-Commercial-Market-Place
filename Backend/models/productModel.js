const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  category_id: {
    type: mongoose.Schema.Types.ObjectId,  
    ref: "Category",  
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
  size:{
    type:Array,
    required: false
  },
  color:{
    type: Array, 
    required: false
  }
});

// Tạo model cho Product
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
