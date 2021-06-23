// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our database, pass in your mySQL info
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: process.env.CLEARDB_DATABASE_URL,
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;