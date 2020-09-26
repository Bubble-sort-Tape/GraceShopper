const router = require('express').Router()
const {Order, User, Product} = require('../db/models')
module.exports = router

// GET /api/orders/cart
// Cart Info for logged in user
router.get('/cart', async (req, res, next) => {
  try {
    const user = req.user
    console.log(req.session)
    if (user) {
      const cart = await Order.findOne({
        where: {userId: user.id, isCart: true},
        attributes: [
          'id',
          'total',
          'isCart',
          'userId',
          'ShippingAddressId',
          'BillingAddressId',
        ],
        include: [{model: Product}],
      })
      if (!cart) res.json([])
      if (!req.session.cart) {
        req.session.cart = cart.products.map((product) => product.OrderItem)
      }
      return res.json(req.session.cart)
    }
    if (req.session.cart) {
      return res.json(req.session.cart)
    }
    res.json([])
  } catch (error) {
    next(error)
  }
})

// GET /api/orders/cart/items
// Cart Items for logged in user
// router.get('/cart/items', async (req, res, next) => {
//   try {
//     const user = req.user
//     if (user) {
//       const cartItems = await Product.findAll({
//         include: {model: Order, where: {userId: user.id}}
//       })
//       res.json(cartItems)
//     }
//   } catch (error) {
//     next(error)
//   }
// })

// POST /api/orders/cart/items/:productId

// ALL ORDERS VIEW FOR ADMIN

// GET /api/orders
router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      attributes: ['id', 'firstName', 'lastName', 'isCart'],
      include: [
        {
          model: User,
          attributes: [
            'id',
            'email',
            'firstName',
            'lastName',
            'house',
            'phone',
            'isAdmin',
          ],
        },
        {model: Product},
      ],
    })
    res.json(orders)
  } catch (error) {
    next(error)
  }
})

// GET /api/orders/:orderId
router.get('/:orderId', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {id: req.params.orderId},
      attributes: ['id', 'firstName', 'lastName', 'isCart'],
      include: [
        {
          model: User,
          attributes: [
            'id',
            'email',
            'firstName',
            'lastName',
            'house',
            'phone',
            'isAdmin',
          ],
        },
        {
          model: Product,
          attributes: [
            'id',
            'name',
            'description',
            'category',
            'imageUrl',
            'price',
            'inventory',
          ],
        },
      ],
    })
    res.json(order)
  } catch (error) {
    next(error)
  }
})
