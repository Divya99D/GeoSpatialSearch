const axios = require('axios');
const config = require('../config');

exports.getLatLong = async (location) => {
    try{
        const res = await axios.get("https://geocode.search.hereapi.com/v1/geocode?q="
        +encodeURI(location)+"&apiKey="+config.API_KEY);
        return res.position;
        
    }catch(e){
        console.log(e)
        throw new Error('No location Found')
    }
}