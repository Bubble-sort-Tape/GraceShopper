'use strict'

const db = require('../server/db')
const {
  User,
  Product,
  Address,
  Order,
  OrdersProduct,
} = require('../server/db/models')
const productsArr = require('./seeds/productsSeed')
const usersArr = require('./seeds/usersSeed')
const addressesArr = require('./seeds/addressSeed')
const ordersArr = require('./seeds/orderSeed')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    usersArr.map((user) => {
      return User.create(user)
    }),
  ])

  const products = await Promise.all(
    productsArr.map((product) => {
      return Product.create(product)
    })
  )

  const orders = await Promise.all(
    ordersArr.map((order) => {
      return Order.create(order)
    })
  )

  const addresses = await Promise.all(
    addressesArr.map((address) => {
      return Address.create(address)
    })
  )

  // async function orderProductAssociate() {
  //   try {
  //     for (let i = 1; i < ordersArr.length; i++) {
  //       let order = await Order.findOrCreate({where: {id: 4}})
  //       //let product = await Order.findOrCreate({where: {id: i}})
  //       console.log(order)
  //     }
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  // orderProductAssociate()

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded ${addresses.length} addresses`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
