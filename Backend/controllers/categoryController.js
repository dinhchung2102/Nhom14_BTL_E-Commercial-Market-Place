const Category = require('../models/categoryModel')


const getCategories = async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      res.status(400).json({
        message: 'Error fetching categories',
        error: error.message
      });
    }
  };


  module.exports = {getCategories}