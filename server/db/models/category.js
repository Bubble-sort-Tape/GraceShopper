const Sequelize = require('sequelize')
const db = require('../db')

const Category = db.define('category', {
  categoryName: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
})

module.exports = Category
