const mongoose = require('mongoose')

const outletModelSchema = new mongoose.Schema({
  type : String,
  geometry : {
    type : String,
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




module.exports = mongoose.model('deliveryOutlet', outletModelSchema, 'deliveryOutlet');

