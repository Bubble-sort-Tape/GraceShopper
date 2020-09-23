const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  category: {
    type: Sequelize.ENUM,
    values: [
      'Sweets',
      'Practical Jokes',
      'Muggle Magic',
      'Explosive Enterprises',
    ],
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue:
      'https://vignette.wikia.nocookie.net/harrypotter/images/c/ce/Weasleys_Wizard_Wheezes.png/revision/latest?cb=20161124001602',
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {min: 0},
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 10,
    validate: {min: 0},
  },
})

module.exports = Product
