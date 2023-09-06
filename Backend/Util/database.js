const Sequelize = require('sequelize');

const sequelize =  new Sequelize('reviews','root','maazdanish',{dialect:'mysql',host:'localhost'});

module.exports = sequelize;