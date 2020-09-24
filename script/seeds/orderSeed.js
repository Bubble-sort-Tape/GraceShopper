const faker = require('faker')

const ordersArr = []

function createOrder() {
  let order = {
    total: Math.floor(Math.random() * 1000),
    paymentMethod: faker.finance.transactionType(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
  }
  return order
}
function seedOrders() {
  for (let i = 0; i < 20; i++) {
    ordersArr.push(createOrder())
  }
}
seedOrders()

module.exports = ordersArr
