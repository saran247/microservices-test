const express = require('express');
const { createProduct, getProducts, getProductById, updateProduct, softDeleteProduct } = require('../controllers/productController');
const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', softDeleteProduct);

module.exports = router;
