const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    if (!req.user || (req.user && !req.user.getDataValue('isAdmin'))) {
      const newErr = new Error('Unauthorized API Request')
      newErr.status = 403
      throw newErr
    }

    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: [
        'id',
        'email',
        'firstName',
        'lastName',
        'house',
        'phone',
        'isAdmin',
      ],
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
