const Product = require('../models/productModel');

// Lấy tất cả sản phẩm
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(); 
    res.json(products);  
  } catch (err) {
    res.status(500).json({ message: err.message });  
  }
};
module.exports = {getAllProducts}