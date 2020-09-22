const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  productName: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue:
      'https://vignette.wikia.nocookie.net/harrypotter/images/c/ce/Weasleys_Wizard_Wheezes.png/revision/latest?cb=20161124001602',
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

module.exports = Product
