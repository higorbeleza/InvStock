const bodyParser = require('body-parser');
const product = require('./productRoutes');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(
        product
    );
}