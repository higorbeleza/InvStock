const { Router } = require('express');
const ProductController = require('../controllers/ProductController');

const router = Router();

router.post('/product', ProductController.add_product);
router.get('/product', ProductController.findByName);
router.get('/product', ProductController.findAll);
router.get('/product/:id', ProductController.findById);
router.put('/product/:id', ProductController.updateProduct);
router.delete('/product/:id', ProductController.deleteProduct);

module.exports = router;
