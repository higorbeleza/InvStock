const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: String
  },
  name: {
    type: String, 
    required: true
  },
  description: {
    type: String, 
    required: true
  },
  supplier: {
    type: Schema.Types.ObjectId,
    required: true
  },
  price: {
    type: Number, 
    required: true
  },
  quantity: {
    type: Number, 
    required: true
  }
},{
  versionKey: false
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;
