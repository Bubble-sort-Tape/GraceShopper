const faker = require('faker')

const houseArr = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']

const usersArr = [
  {
    email: 'harry@hogwarts.edu',
    password: 'alohomora',
    firstName: 'Harry',
    lastName: 'Potter',
    house: 'Gryffindor',
    phone: '(555) 123-4567',
  },
  {
    email: 'hermione@hogwarts.edu',
    password: 'muggleborn',
    firstName: 'Hermione',
    lastName: 'Granger',
    house: 'Gryffindor',
  },
  {
    email: 'draco@hogwarts.edu',
    password: 'deathEater4life',
    firstName: 'Draco',
    lastName: 'Malfoy',
    house: 'Slytherin',
  },
  {
    email: 'cedric@hogwarts.edu',
    password: 'triwizardchamp',
    firstName: 'Cedric',
    lastName: 'Diggory',
    house: 'Hufflepuff',
  },
  {
    email: 'luna@hogwarts.edu',
    password: 'looney',
    firstName: 'Luna',
    lastName: 'Lovegood',
    house: 'Ravenclaw',
  },
]

function createUsers() {
  let user = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    house: houseArr[Math.floor(Math.random() * houseArr.length)],
  }
  return user
}
function seedUsers() {
  for (let i = 0; i < 20; i++) {
    usersArr.push(createUsers())
  }
}
seedUsers()

module.exports = usersArr
