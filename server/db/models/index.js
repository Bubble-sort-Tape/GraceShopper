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
const OrdersProduct = db.define('OrdersProduct')
Order.belongsToMany(Product, {through: OrdersProduct})
Product.belongsToMany(Order, {through: OrdersProduct})

// Cart (Product-User) M:M
const Cart = db.define('Cart')
Product.belongsToMany(User, {through: Cart})
User.belongsToMany(Product, {through: Cart})

// User-Address 1:M
User.hasMany(Address)

// User-Order 1:M
User.hasMany(Order)

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
}
