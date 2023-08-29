const bodyParser = require('body-parser');
const product = require('./productRoutes');
const supplier = require('./supplierRoutes');
const transaction = require('./transactionRoutes');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(
        product,
        supplier,
        transaction
    );
}