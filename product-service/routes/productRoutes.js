const express = require('express');
const { createProduct, getProducts, updateProduct, softDeleteProduct } = require('../controllers/productController');
const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);
router.put('/:id', updateProduct);
router.delete('/:id', softDeleteProduct);

module.exports = router;
