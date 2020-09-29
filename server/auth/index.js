const router = require('express').Router()
const User = require('../db/models/user')
module.exports = router

function filterKeys(allowedKeys, dirtyObject) {
  const cleanObject = {}
  for (const key of allowedKeys) {
    if (key in dirtyObject) {
      cleanObject[key] = dirtyObject[key]
    }
  }
  return cleanObject
}

//Cleans a fetched user to send to the client
function cleanUser(user) {
  const allowKeys = [
    'id',
    'email',
    'firstName',
    'lastName',
    'house',
    'phone',
    'isAdmin',
  ]
  return filterKeys(allowKeys, user)
}

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {email: req.body.email}})
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      //after checking password, clean user before returning data
      const cleanedUser = cleanUser(user)
      req.login(user, (err) => (err ? next(err) : res.json(cleanedUser)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body, {
      fields: [
        'email',
        'firstName',
        'lastName',
        'house',
        'phone',
        'password',
        'salt',
      ],
    })

    //after creating user, clean user instance before returning data
    const cleanedUser = cleanUser(user)
    req.login(user, (err) => (err ? next(err) : res.json(cleanedUser)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  if (!req.user) {
    console.log(req.user)
    res.status(404).send('Not logged in')
  } else {
    //after creating user, clean user instance before returning data
    const cleanedUser = cleanUser(req.user)
    res.json(cleanedUser)
  }
})

router.use('/google', require('./google'))
