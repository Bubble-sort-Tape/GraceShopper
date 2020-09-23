const Sequelize = require('sequelize')
const db = require('../db')

const Address = db.define('address', {
  address1: {
    type: Sequelize.TEXT,
    allowNull: false,
    isEmpty: false,
  },
  address2: {
    type: Sequelize.TEXT,
  },
  city: {
    type: Sequelize.TEXT,
    allowNull: false,
    isEmpty: false,
  },
  zip: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmpty: false,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmpty: false,
  },
})

module.exports = Address
