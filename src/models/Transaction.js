const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const transictionSchema = new Schema({
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

const Transictions = mongoose.model('Transiction', transictionSchema);

module.exports = Transictions;
