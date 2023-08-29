const { Router } = require('express');
const ProductController = require('../controllers/ProductController');

const router = Router();

router
    .get('/products', ProductController.getProducts)
    .get('/products/:id', ProductController.getProductById)
    .post('/add-product', ProductController.registerProduct)
    .put('/update-product/:id', ProductController.updateProduct)
    .delete('/del-product/:id', ProductController.deleteProduct)

module.exports = router;
