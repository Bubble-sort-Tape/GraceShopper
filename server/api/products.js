const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

/* All Products Routes */

//GET /api/products/
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      attributes: ['id', 'name', 'imageUrl', 'price', 'inventory'],
    })

    //TODO: Confirm currency is sent to front-end as a properly localized string.

    res.json(products)
  } catch (err) {
    next(err)
  }
})

/* Single Product Route */

router.get('/:productId', async (req, res, next) => {
  try {
    //dostuff
  } catch (err) {
    next(err)
  }
})
