const Sequelize = require('sequelize');
const sequelize = require('../Util/database');

const Review = sequelize.define('review', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    pros: Sequelize.STRING,
    cons: Sequelize.STRING,
    rating: Sequelize.DOUBLE
});

module.exports = Review;