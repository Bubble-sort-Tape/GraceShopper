const Sequelize = require('sequelize')
const User = require('./user')
const Product = require('./product')
const Address = require('./address')
const Order = require('./order')

const db = require('../db')

/**
 * If we had any associations to make, this would be a great place to put them!
 */

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
Address.belongsTo(User)

// User-Order 1:M
User.hasMany(Order)
Order.belongsTo(User)

// Order-Address 1:1
Address.hasMany(Order, {foreignKey: 'ShippingAddressId'})
Address.hasMany(Order, {foreignKey: 'BillingAddressId'})
Order.belongsTo(Address, {as: 'ShippingAddress'})
Order.belongsTo(Address, {as: 'BillingAddress'})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  Address,
  Order,
  OrdersProduct,
}
