const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  total: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  paymentMethod: {
    type: Sequelize.STRING,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isCart: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
})

module.exports = Order
