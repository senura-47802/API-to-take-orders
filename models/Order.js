const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  details: { type: String, required: true },
  phoneNo: { type: String, required: true },
  price: { type: Number, required: true },
  expiration: { type: Date, required: true },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
