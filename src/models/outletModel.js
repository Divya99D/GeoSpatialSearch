const mongoose = require('mongoose')

const outletModelSchema = new mongoose.Schema({
  type : {
    type: String,
    enum: ['Point'],
    required: true
  },
  geometry : {
    type : {
      type: String,
      enum: ['Polygon'],
      required: true
    },
    coordinates : [[[Number]]],
  },
  properties: {
    name: String,
    styleUrl: String,
    styleHash: String,
    styleMapHash: {
      normal: String,
      highlight: String
    }
  }
})

module.exports = mongoose.model('deliveryOutlets', outletModelSchema, 'deliveryOutlets');