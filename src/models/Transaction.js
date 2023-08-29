const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const transactionSchema = new Schema({
    idProduct: {
        type: Schema.Types.ObjectId
    },
    type: {
        type: String,
        enum: ['input', 'output'],
        required: true
    },
    exitQuantity: {
        type: Number,
        required: true
    }
}, {
    versionKey: false
});

const Transactions = mongoose.model('Transaction', transactionSchema);

module.exports = Transactions;
