// models/destination.js
const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    required: true
  },
  arrival: {
    type: Date,
    required: true
  }
});

// module.exports = mongoose.model('Destination', destinationSchema);

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;
