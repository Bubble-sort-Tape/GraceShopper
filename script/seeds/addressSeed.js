const faker = require('faker')

const addressesArr = []

function createAddress() {
  let address = {
    address1: faker.address.streetAddress(),
    address2: faker.address.secondaryAddress(),
    city: faker.address.city(),
    zip: faker.address.zipCode(),
    country: faker.address.country(),
  }
  return address
}
function seedAddresses() {
  for (let i = 0; i < 20; i++) {
    addressesArr.push(createAddress())
  }
}
seedAddresses()

module.exports = addressesArr
