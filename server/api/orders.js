const router = require('express').Router()
const {adminGate} = require('./gatekeeper')
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
          //'total',
          'isCart',
          'userId',
          'ShippingAddressId',
          'BillingAddressId',
        ],
        include: [{model: Product}],
        defaults: {userId: req.user.id},
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
      include: [{model: Product}],
      defaults: {userId: req.user.id},
    })
    const product = await Product.findOne({
      where: {id: req.params.productId},
    })
    const [newOrderItem, created] = await OrderItem.findOrCreate({
      where: {
        productId: Number(req.params.productId),
        orderId: order.id,
      },
      defaults: {quantity: req.body.quantity, price: product.price},
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

    const newOrder = await Order.findOne({
      where: {
        userId: req.user.id,
        isCart: true,
      },
      include: [{model: Product}],
      defaults: {userId: req.user.id},
    })
    const updatedProduct = newOrder.products.find(
      (prod) => prod.id === newOrderItem.productId
    )

    res.json(updatedProduct)
  } catch (error) {
    next(error)
  }
})

// UPDATE PRODUCT QUANTITY /api/orders/cart/:productId
router.put('/cart/:productId', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.user.id,
        isCart: true,
      },
      include: {model: Product},
    })
    const orderItem = await OrderItem.findOne({
      where: {
        productId: Number(req.params.productId),
        orderId: order.id,
      },
    })
    await orderItem.update(
      {
        productId: Number(req.params.productId),
        orderId: order.id,
        quantity: req.body.quantity,
      },
      {
        where: {productId: Number(req.params.productId), orderId: order.id},
      }
    )

    const newOrder = await Order.findOne({
      where: {
        userId: req.user.id,
        isCart: true,
      },
      include: {model: Product},
    })
    const updatedProduct = newOrder.products.find(
      (prod) => prod.id === orderItem.productId
    )
    res.json(updatedProduct)
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
    await order.removeProduct(product)
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

// POST /api/orders/checkout
router.post('/checkout', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.user.id,
        isCart: true,
      },
    })
    await order.createShippingAddress(req.body.shippingAddress)
    await order.createBillingAddress(req.body.billingAddress)
    const updatedOrder = await order.update({
      isCart: false,
    })
    res.json(updatedOrder)
  } catch (error) {
    next(error)
  }
})

// ALL ORDERS VIEW FOR ADMIN
router.use('*', adminGate)

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
