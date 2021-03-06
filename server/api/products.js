const router = require('express').Router()
const {Product} = require('../db/models')
const {adminGate} = require('./gatekeeper')
module.exports = router

/* All Products Routes */

//GET /api/products/
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      attributes: ['id', 'name', 'imageUrl', 'price', 'inventory'],
    })

    res.json(products)
  } catch (err) {
    next(err)
  }
})

/* Single Product Route */

//GET /api/products/:productId
router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.productId,
      },
    })
    res.json(product)
  } catch (error) {
    next(error)
  }
})

/* Admin-Only Product Modification Routes */
router.use('*', adminGate)

//POST /api/products/
router.post('/', async (req, res, next) => {
  try {
    const product = await Product.create(req.body, {
      fields: [
        'name',
        'description',
        'imageUrl',
        'price',
        'inventory',
        'category',
      ],
    })

    res.json(product)
  } catch (error) {
    next(error)
  }
})

//PUT /api/products/:productId
router.put('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.productId,
      },
    })
    if (!product) {
      res.sendStatus(404)
    } else {
      const updatedProduct = await product.update(req.body, {
        fields: [
          'name',
          'description',
          'imageUrl',
          'price',
          'inventory',
          'category',
        ],
      })
      res.json(updatedProduct)
    }
  } catch (error) {
    next(error)
  }
})

//DELETE /api/products/:productId
router.delete('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.productId,
      },
    })
    if (!product) {
      res.sendStatus(404)
    } else {
      await product.destroy(req.body)
      res.sendStatus(204)
    }
  } catch (error) {
    next(error)
  }
})
