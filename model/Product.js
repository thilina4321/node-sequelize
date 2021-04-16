const { DataTypes } = require('sequelize');
const sequelize = require('../util/db')

const Product = sequelize.define('product', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER
     
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

module.exports = Product