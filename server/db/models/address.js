const Sequelize = require('sequelize')
const db = require('../db')

const Address = db.define('address', {
  address1: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  address2: {
    type: Sequelize.TEXT,
  },
  city: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 10,
  },
})

module.exports = Address
