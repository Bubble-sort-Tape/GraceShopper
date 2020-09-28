const router = require('express').Router()
const {Order, User, Product, OrderItem, Address} = require('../db/models')
module.exports = router

// POST /api/orders/checkout
// router.post('/checkout', async (req, res, next) => {
//   try {
//     const order = await Order.findOne({
//       where: {
//         userId: req.user.id,
//       },
//     })
//     const address = await Order.create({
//       ShippingAddressId: req.body.shippingAddress,
//       BillingAddressId: req.body.billingAddress,
//     })
//     const updatedOrder = Order.update({
//       isCart: false,
//     })
//     res.json(updatedOrder)
//   } catch (error) {
//     next(error)
//   }
// })
