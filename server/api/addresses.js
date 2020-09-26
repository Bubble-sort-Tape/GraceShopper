const router = require('express').Router()
const {Address} = require('../db/models')
module.exports = router

//GET /api/addresses
router.get('/', async (req, res, next) => {
  try {
    const address = await Address.findAll()
    res.json(address)
  } catch (error) {
    next(error)
  }
})
