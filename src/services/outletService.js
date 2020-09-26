
const outletModel = require('../models/outletModel');
const locationService = require('../services/locationService');
const config = require('../config');

const getOutlet = async function (options) {
    try {
        const location = await locationService.getLatLong(options.customerLocation);
        const res = await outletModel.find({geometry:{$geoIntersects:{$geometry:{ "type" : "Point", "coordinates" : [ location.lng, location.lat, 0 ] }}}})
        if(res && res.length > 0){
           return (res[0].properties && res[0].properties.name) ? res[0].properties.name : '';
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
