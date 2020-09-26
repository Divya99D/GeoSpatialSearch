const config = {
    PORT: process.env.PORT,
    ENV: process.env.NODE_ENV,
    DB_URI: process.env.DB_CONNECTION_STRING,
    API_KEY: process.env.API_KEY
   }

module.exports = config;
