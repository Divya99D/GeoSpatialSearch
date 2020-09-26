const outletService = require('../services/outletService');

const getOutletController = async function(req, res, next) {
    const options = {
        customerLocation : req.params.customerLocation
    }
    try{
        const response = await outletService.getOutlet(options);
        return res.status(200).json({status : 200, data: response, message: "Success"});
    }catch(e){
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getOutletController = getOutletController;
