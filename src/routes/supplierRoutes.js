const { Router } = require('express');
const SuppliersController = require('../controllers/SupplierController');

const router = Router();

router
    .get('/suppliers', SuppliersController.getSuppliers)
    .get('/suppliers/:id', SuppliersController.getSupplierById)
    .post('/add-supplier', SuppliersController.registerSupplier)
    .put('/update-supplier/:id', SuppliersController.updateSupplier)
    .delete('/del-supplier/:id', SuppliersController.deleteSupplier)

module.exports = router;