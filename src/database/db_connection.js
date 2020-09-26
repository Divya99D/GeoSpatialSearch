const mongoose = require('mongoose');
const config = require('../config')

const connectOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
};

const connectDB = async () => {
    try{
        await mongoose.connect(config.DB_URI, connectOptions);
        console.log('MongoDB Connected');
    }catch(e){
        console.error("MongoDB connection error:: ",e.message);
    }
}

module.exports = connectDB;