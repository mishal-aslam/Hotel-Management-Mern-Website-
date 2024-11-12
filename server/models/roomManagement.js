const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
  roomName: {
    type: String,  
    required: true
  },
  roomType: {
    type: String, 
    required: true
  },
  availablity: {
    type: String,  
  },
  roomStatus: {
    type: String,
    enum: ['cleaning', 'occupied', 'available']
  },
  rentPerDay: {
    type: Number,  
    required: true
  },
  imageurls: {
    type: [String],  
    default: []     
  },
  currentBookings: {
    type: [Object],  
    default: []     
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,  
    default: true    
  }
}, {
  timestamps: true
});

const RoomManagement = mongoose.model('room', roomSchema, 'room');

module.exports = RoomManagement;
