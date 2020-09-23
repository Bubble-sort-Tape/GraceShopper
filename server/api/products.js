const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

/* All Products Routes */

router.get('/', async (req, res, next) => {
  try {
    //dostuff
  } catch (err) {
    next(err)
  }
})

/* Single Product Route */

//GET /api/product/:productId
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
