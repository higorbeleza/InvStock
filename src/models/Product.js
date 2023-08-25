const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {type: String},
  name: {type: String, require},
  description: {type: String, require},
  price: {type: String, require},
  quantity: {type: Number, require}
},{
  versionKey: false
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;
