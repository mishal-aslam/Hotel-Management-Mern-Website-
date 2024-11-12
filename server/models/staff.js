const mongoose = require('mongoose');

const staffSchema = mongoose.Schema({
  name: String,
  designation: String,
  status: Boolean
});

const Staff = mongoose.model('Staff', staffSchema, 'staff');

module.exports = Staff;  