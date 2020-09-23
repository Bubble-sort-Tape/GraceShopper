const Sequelize = require('sequelize')
const User = require('./user')
const Product = require('./product')
const Category = require('./category')
const Address = require('./address')
const Order = require('./order')

const db = require('../db')

/**
 * If we had any associations to make, this would be a great place to put them!
 */

// Product-Category 1:M
Category.hasMany(Product)

// Order-Product M:M
const OrdersProduct = db.define('OrdersProduct', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {min: 0},
  },
})
Order.belongsToMany(Product, {through: OrdersProduct})
Product.belongsToMany(Order, {through: OrdersProduct})

// User-Address 1:M
User.hasMany(Address)

// User-Order 1:M
User.hasMany(Order)

// Order-Address 1:1
Address.hasOne(Order, {foreignKey: 'shippingID'})
Address.hasOne(Order, {foreignKey: 'billingID'})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  Category,
  Address,
  Order,
  OrdersProduct,
}
