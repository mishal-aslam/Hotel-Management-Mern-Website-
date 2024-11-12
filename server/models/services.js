const mongoose = require('mongoose');

const servicesSchema = mongoose.Schema({
    serviceName: {
        type: String,
        enum: [
            'Spa',
            'Swimming Pool',
            'Laundry',
            'Room Service',
            'Fitness Center',
            'Car Rental',
        ]
    },
    price: {
        type: Number,
    },
    duration: {
        type: String, // 'per hour', 'per day', 'per session'
    },
    status: {
        type: Boolean,
    },

});

const Services = mongoose.model('Services', servicesSchema, 'Services');

module.exports = Services;