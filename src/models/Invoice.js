const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_type: String,
  product: String,
  description: String,
  total: String,
});

const invoiceSchema = new mongoose.Schema({
  client: String,
  trip_no: String,
  products: [productSchema],
});

const InvoiceModel = mongoose.model('Invoice', invoiceSchema);

module.exports = InvoiceModel;
