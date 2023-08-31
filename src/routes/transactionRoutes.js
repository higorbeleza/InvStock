const { Router } = require('express');
const TransactionsController = require('../controllers/TransactionsController');

const router = Router();

router
    .get('/transactions', TransactionsController.getTransactions)
    .post('/output/:id', TransactionsController.registrarSaida)
    .post('/input/:id', TransactionsController.registrarEntrada)

module.exports = router;