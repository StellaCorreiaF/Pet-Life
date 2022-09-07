require('dotenv').config()

module.exports = { 
    username: process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    dialect: process.env.DB_TYPE,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT, 
    
} 

    

    // username: "root",
    // password:"root",
    // database:"petlife",
    // dialect: "mysql",
    // host:"127.0.0.1",
    // port:"3306",