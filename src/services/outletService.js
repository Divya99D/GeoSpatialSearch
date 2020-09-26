
const outletModel = require('../models/outletModel');
const locationService = require('../services/locationService');
const config = require('../config');

const getOutlet = async function (options) {
    try {
        const location = locationService.getLatLong(options.customerLocation);
        /*const res = await outletModel.find({
              $geoWithin: {
                 $geometry: {
                    type : "Polygon" ,
                    coordinates: [ [ [ location.long, location.lat ] ] ]
                 }
              }
          });*/
        //const res = await outletModel.find({geometry:{$geoIntersects:{$geometry:{ "type" : "Point", "coordinates" : [ 16.3240513, 48.2425113,0 ] }}}})
        const res = {"properties": {"name": "au_vienna_wallensteinstr"}};
        if(res){
           return (res.properties && res.properties.name) ? res.properties.name : '';
        }else{
            //throw createError(400, `not found`)
            throw new Error('error')
        }
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}
exports.getOutlet = getOutlet;
