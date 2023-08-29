const { Router } = require('express');
const TransactionsController = require('../controllers/TransactionsController');

const router = Router();

router
    .get('/transactions', TransactionsController.getTransactions)
    .post('/exit/:id', TransactionsController.registrarSaida)

module.exports = router;