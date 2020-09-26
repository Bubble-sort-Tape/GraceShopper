const router = require('express').Router()
const {Order, User, Product} = require('../db/models')
module.exports = router

// GET /api/orders/cart
router.get('/cart', async (req, res, next) => {
  try {
    const user = req.user
    console.log(user)
    if (user) {
      const cart = await Order.findAll({
        where: {isCart: true, userId: req.user.id},
        include: [{model: User}, {model: Product}],
      })
      res.json(cart)
    }
  } catch (error) {
    next(error)
  }
})

router.get('/cart/:itemId', async (res, req, next) => {
  try {
    const user = req.user
    const product = req.product
    if (user) {
      const cartItem = await Order.findOne({
        where: {userId: req.user.id, product: req.params.itemId},
        include: [{model: Product}],
      })
      res.json(cartItem)
    }
  } catch (error) {
    next(error)
  }
})

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
