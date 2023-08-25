const { Router } = require('express');
const ProductController = require('../controllers/ProductController');

const router = Router();

router.post('/add_product', ProductController.add_product);
router.get('/product_name', ProductController.findByName);
router.get('/all_products', ProductController.findAll);
router.get('/product_id/:id', ProductController.findById);

module.exports = router;
