const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.get('/allProducts',productController.getAllProducts);

module.exports = router;