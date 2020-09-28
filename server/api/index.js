const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/products', require('./products'))

//temporary orders/checkout until Danielle gets the /orders.js file
// router.use('/orders/checkout', require('./orders/checkout'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
