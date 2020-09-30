const faker = require('faker')

const categoryArr = [
  'Sweets',
  'Practical Jokes',
  'Muggle Magic',
  'Explosive Enterprises',
]

const productsArr = [
  {
    name: 'Ice Cold Butterbeer',
    description:
      'When ordered, an owl will deliver a container with an ice cold glass of Butterbeer, straight from The Three Broomsticks',
    category: 'Sweets',
    imageUrl:
      'https://i0.wp.com/topsecretrecipes.com/foodhackerblog/wp-content/uploads/2018/01/butter-beer_top.jpg?resize=500%2C486&ssl=1',
    price: 600,
    inventory: 1000,
  },

  {
    name: 'Exploding bonbons',
    description:
      'Exploding bonbons contain pure cocoa and Coconut Dynamite. They explode when eaten and intended to cause major injury.',
    category: 'Explosive Enterprises',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/a/a1/Exploding-bon-bons-lrg.png/revision/latest?cb=20130801024311',
    price: 1200,
    inventory: 45,
  },

  {
    name: 'Fizzing Whizzbees',
    description:
      'Large sherbet balls that will cause a person who sucks on them to float a few inches off of the ground',
    category: 'Sweets',
    imageUrl:
      'https://www.918plate.com/wp-content/uploads/2017/11/Fizzing-Whizzbees-SQ.jpg',
    price: 500,
    inventory: 200,
  },

  {
    name: 'Anti Gravity Hat',
    description: "Ruin a gentleman's day by making his hat fly away!",
    category: 'Practical Jokes',
    price: 750,
    inventory: 5,
  },
  {
    name: 'Fudge Flies',
    description:
      'Fudge flavored candy made from fly fudge in the shape of flies',
    category: 'Sweets',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/71Zqv8v%2BBSL._AC_SL1221_.jpg',
    price: 340,
    inventory: 200,
  },
  {
    name: 'Quaffle',
    description:
      'The Quaffle is the ball used in Quidditch with which Chasers score goals. Due to the nature of the game, the quaffle must be caught and thrown one-handed. Quaffles sold at Quaffle House are practice quaffles made for students at Hogwarts.',
    category: 'Explosive Enterprises',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/91toYAtM7qL._AC_SL1500_.jpg',
    price: 850,
    inventory: 50,
  },
  {
    name: 'Pepper Imps',
    description:
      'Tiny black peppermint sweets that allow the consumer to breathe fire, and make them smoke at the ears and nose.',
    category: 'Sweets',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/91mMBjj43IL._AC_SL1500_.jpg',
    price: 450,
    inventory: 100,
  },
  {
    name: 'Ice Mice',
    description:
      'Ice Mice are a form of sweets that cause the consumer\'s teeth to "chatter and squeak".',
    category: 'Sweets',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/5/5d/IceMice.png/revision/latest?cb=20151226025434',
    price: 250,
    inventory: 75,
  },
  {
    name: 'Trick Wand',
    description:
      'turn into a variety of unexpected things when waved. The cheapest into rubber chickens or briefs when waved, the most expensive beating user around the head.',
    category: 'Practical Jokes',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/0/0e/Fakewand.png/revision/latest/top-crop/width/360/height/450?cb=20141213150844',
    price: 400,
    inventory: 17,
  },
  {
    name: "Weasleys' Wildfire Whiz-Bangs",
    description:
      'unstoppable fireworks that violently explode when hit by a stunning spell and multiply by ten at any attempt to vanish them. These include a shocking-pink Catherine wheel, fire-breathing dragons, sparklers that spell out profanity, rockets with long tails of silver stars, and standard firecrackers. When any two types collide, they make new effects. Include Basic Blaze Box and Deflagration Deluxe.',
    category: 'Explosive Enterprises',
    imageUrl:
      'https://vignette.wikia.nocookie.net/weasleyswizardwheezesroleplay/images/9/92/Weasleys%27_Wildfire_Whiz-bangs.JPG/revision/latest/scale-to-width-down/340?cb=20111225024242',
    price: 220,
    inventory: 300,
  },
  {
    name: 'U-NO-POO',
    description:
      'This producs causes constipation in the unknowing taker. The pills can be masehd up and mixed with food or drink.',
    category: 'Sweets',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/d/d4/Bottles_of_U-No-Poo_%28Weasleys%27_Wizard_Wheezes_product%29.JPG/revision/latest/top-crop/width/360/height/450?cb=20180709020330',
    price: 800,
    inventory: 30,
  },
  {
    name: "Drooble's Best Blowing Gum",
    description:
      'Drooble is the top rated Wizarding brand of bubblegum manufactured by Honeydukes Company Ltd. This gum lets the consumer blow bluebell-coloured bubbles that refuse to pop for days. It is guaranteed to never lose its flavor. It is available here at Quafflehouse in sugar-free crazyberry flavour.',
    category: 'Sweets',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/2/2f/DrooblesPottermore.png/revision/latest?cb=20120919202853',
    price: 340,
    inventory: 50,
  },

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
    name: 'Canary Creams',
    description:
      'These creams have the appearce and taste of ordinary custard creams, but when eaten, they transfigure the eater into a large canary. Within a minute, the person will moult his or her feathers and revert to normal appearance.',
    category: 'Sweets',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/8/84/Canary_Creme_WU.png/revision/latest/scale-to-width-down/240?cb=20200726112015',
    price: 375,
    inventory: 150,
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
    name: 'Nose-Biting Teacup',
    description:
      'This teacup is an ordinary-looking teacup that has been jinxed to bite the nose of anyone who tries to drink out of it.',
    category: 'Practical Jokes',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/9/9a/Nose-Biting_Teacups_WU.png/revision/latest/scale-to-width-down/150?cb=20200726104242',
    price: 300,
    inventory: 50,
  },
  {
    name: 'Dungbomb',
    description:
      "A dungbomb is a magical stink bomb that gies off a putrid odour. When handled, Dungbombs leave a person's hand dirty. REMINDER: this product is banned at Hogwarts School of Witchcraft and Wizardry.",
    category: 'Practical Jokes',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/d/d8/Dungbomb_WU.png/revision/latest/scale-to-width-down/200?cb=20200726104248',
    price: 320,
    inventory: 100,
  },
  {
    name: 'Jinx-Off',
    description:
      'Jinx-Off is a spell-protection kit that includes a hat, cloack, and gloves. For maximum protection, wear all items at the same time and make sure the items remain in perfect condition.',
    category: 'Muggle Magic',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/d/df/JinxOffPackage.jpg/revision/latest/scale-to-width-down/250?cb=20180708175008',
    price: 10000,
    inventory: 50,
  },
  {
    name: 'Fever Fudge',
    description:
      'This fudge is desgined to make the one who eats it get a high fever within seconds of eating. Side effects include: large, pus filled boils.',
    category: 'Practical Jokes',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/A1bEFsJVzeL._SL1500_.jpg',
    price: 560,
    inventory: 200,
  },
  {
    name: 'Fainting Fancies',
    description:
      'This sweet is desinged to make the eater faint within seconds.',
    category: 'Practical Jokes',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/91BABjwFIGL._SL1500_.jpg',
    price: 650,
    inventory: 100,
  },
]

// function createProduct() {
//   let product = {
//     name: faker.commerce.productName(),
//     description: faker.commerce.productDescription(),
//     category: categoryArr[Math.floor(Math.random() * categoryArr.length)],
//     imageUrl: faker.random.image(),
//     price: Math.floor(Math.random() * 100),
//     inventory: Math.floor(Math.random() * 1000),
//   }
//   return product
// }
// function seedProducts() {
//   for (let i = 0; i < 15; i++) {
//     productsArr.push(createProduct())
//   }
// }
// seedProducts()

module.exports = productsArr
