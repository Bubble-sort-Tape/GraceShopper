'use strict'

const db = require('../server/db')
const {User, Product, Category} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'harry@hogwarts.edu',
      password: 'alohomora',
      firstName: 'Harry',
      lastName: 'Potter',
      wizardHouse: 'Gryffindor',
      phone: '(555) 123-4567',
    }),
    User.create({
      email: 'hermione@hogwarts.edu',
      password: 'muggleborn',
      firstName: 'Hermione',
      lastName: 'Granger',
      wizardHouse: 'Gryffindor',
    }),
  ])

  const products = await Promise.all([
    Product.create({
      productName: "Bertie Bott's Every Flavor Beans",
      description:
        'Delicious normal jelly beans are mixed with crazy, creepy flavors in a 20-flavor magical medley, which keeps tasters guessing whether they’ll get a tasty or tricky flavor with every bite. Some of the tasty flavors include Marshmallow, Cherry, Cinnamon and Blueberry. These are paired with gross flavors like Vomit, Soap and Earwax as well as odd flavors like Sausage, Grass and Black Pepper for a fun and risky experience.',
      imageUrl:
        'https://vignette.wikia.nocookie.net/harrypotter/images/6/60/Bertie_Botts_EFB.png/revision/latest/scale-to-width-down/341?cb=20161128010133',
      price: 3.5,
      inventory: 50,
    }),
    Product.create({
      productName: 'Chocolate Frogs',
      description:
        'Chocolate frogs are a very popular sweet made from chocolate in the form of a frog. They come with a collectible card of a famous witch or wizard in each pack. The frogs are made of seventy percent Croakoa. Presumably, this substance is what allows them to act like an actual frog.',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0221/1146/products/ChocolateFrogPin1_large.png?v=1579875491',
      price: 4.5,
      inventory: 27,
    }),
  ])

  const categories = await Promise.all([
    Category.create({
      categoryName: 'Candy',
      description: 'Magical treats for every wizards needs',
    }),
    Category.create({
      categoryName: 'Practical Jokes',
    }),
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
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
