const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const transactionSchema = new Schema({
    idProduct: {
        type: Schema.Types.ObjectId
    },
    type: {
        type: String
    },
    exitQuantity: {
        type: Number
    }
}, {
    versionKey: false
});

const Transactions = mongoose.model('Transaction', transactionSchema);

module.exports = Transactions;
