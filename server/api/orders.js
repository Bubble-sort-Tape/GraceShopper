const router = require('express').Router()
const {Order, User, Product, OrderItem} = require('../db/models')
module.exports = router

// GET CART ITEMS /api/orders/cart
router.get('/cart', async (req, res, next) => {
  try {
    const user = req.user
    if (user) {
      const [cart] = await Order.findOrCreate({
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
        defaults: {
          userId: req.user.id,
          total: 0,
          paymentMethod: 'magic',
          firstName: 'Xander',
          lastName: 'Bakx',
          email: req.user.email,
        },
      })
      res.json(cart.products)
    }
  } catch (error) {
    next(error)
  }
})

// ADD PRODUCT TO CART /api/orders/cart/:productId
router.post('/cart/:productId', async (req, res, next) => {
  try {
    const [order] = await Order.findOrCreate({
      where: {
        userId: req.user.id,
        isCart: true,
      },
      defaults: {
        userId: req.user.id,
        email: req.user.email,
        total: 0,
        paymentMethod: 'magic',
        firstName: 'Xander',
        lastName: 'Bakx',
      },
    })
    const [newOrderItem, created] = await OrderItem.findOrCreate({
      where: {
        productId: Number(req.params.productId),
        orderId: order.id,
      },
      defaults: {quantity: req.body.quantity},
    })
    if (!created) {
      await newOrderItem.update(
        {
          productId: Number(req.params.productId),
          orderId: order.id,
          quantity: req.body.quantity + newOrderItem.quantity,
        },
        {
          where: {productId: Number(req.params.productId), orderId: order.id},
        }
      )
    }
    res.json(newOrderItem)
  } catch (error) {
    next(error)
  }
})

// REMOVE PRODUCT FROM CART /api/orders/cart/:productId
router.delete('/cart/:productId', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {userId: req.user.id, isCart: true},
      include: {model: Product},
    })
    const product = await Product.findByPk(req.params.productId)
    order.removeProduct(product)
    res.json(order.products)
  } catch (error) {
    next(error)
  }
})

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
