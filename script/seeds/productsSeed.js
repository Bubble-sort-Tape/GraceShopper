const faker = require('faker')

const categoryArr = [
  'Sweets',
  'Practical Jokes',
  'Muggle Magic',
  'Explosive Enterprises',
]

const productsArr = [
  {
    name: "Bertie Bott's Every Flavor Beans",
    description:
      'Delicious normal jelly beans are mixed with crazy, creepy flavors in a 20-flavor magical medley, which keeps tasters guessing whether they’ll get a tasty or tricky flavor with every bite. Some of the tasty flavors include Marshmallow, Cherry, Cinnamon and Blueberry. These are paired with gross flavors like Vomit, Soap and Earwax as well as odd flavors like Sausage, Grass and Black Pepper for a fun and risky experience.',
    category: 'Sweets',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/6/60/Bertie_Botts_EFB.png/revision/latest/scale-to-width-down/341?cb=20161128010133',
    price: 350,
    inventory: 50,
  },
  {
    name: 'Chocolate Frogs',
    description:
      'Chocolate frogs are a very popular sweet made from chocolate in the form of a frog. They come with a collectible card of a famous witch or wizard in each pack. The frogs are made of seventy percent Croakoa. Presumably, this substance is what allows them to act like an actual frog.',
    category: 'Sweets',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0221/1146/products/ChocolateFrogPin1_large.png?v=1579875491',
    price: 450,
    inventory: 27,
  },
  {
    name: 'Anti Gravity Hat',
    description: "Ruin a gentleman's day by making his hat fly away!",
    category: 'Practical Jokes',
    price: 750,
    inventory: 5,
  },
  {
    name: 'Trick Wand',
    description:
      'turn into a variety of unexpected things when waved. The cheapest into rubber chickens or briefs when waved, the most expensive beating user around the head.',
    category: 'Practical Jokes',
    price: 400,
    inventory: 17,
  },
  {
    name: "Weasleys' Wildfire Whiz-Bangs",
    description:
      'unstoppable fireworks that violently explode when hit by a stunning spell and multiply by ten at any attempt to vanish them. These include a shocking-pink Catherine wheel, fire-breathing dragons, sparklers that spell out profanity, rockets with long tails of silver stars, and standard firecrackers. When any two types collide, they make new effects. Include Basic Blaze Box and Deflagration Deluxe.',
    category: 'Explosive Enterprises',
    price: 220,
    inventory: 300,
  },
]

function createProduct() {
  let product = {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    category: categoryArr[Math.floor(Math.random() * categoryArr.length)],
    imageUrl: faker.random.image(),
    price: Math.floor(Math.random() * 100),
    inventory: Math.floor(Math.random() * 1000),
  }
  return product
}
function seedProducts() {
  for (let i = 0; i < 15; i++) {
    productsArr.push(createProduct())
  }
}
seedProducts()

module.exports = productsArr
