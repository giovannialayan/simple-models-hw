const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  breed: {
    type: String,
    required: true,
    trim: true,
    unique: false,
  },
  age: {
    type: String,
    required: true,
    trim: true,
    unique: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Dog', DogSchema);
