const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const supplierSchema = new Schema({
  name: {type: String},
  contactInfo: {type: String}
},{
  versionKey: false
});

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;