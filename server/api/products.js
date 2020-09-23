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

router.get('/:productId', async (req, res, next) => {
  try {
    //dostuff
  } catch (err) {
    next(err)
  }
})
