

const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true
  },
  emergencyNumber: {
    type: Number,
    required: true
  },
  CNIC: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
  ,
  // isAdmin: {
  //   type: Boolean,
  //   default: false
  // }
}, {
  timestamps: true
});

const Customer = mongoose.model('Customer', customerSchema, 'customer');

module.exports = Customer;
