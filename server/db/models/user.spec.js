/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let user

      beforeEach(async () => {
        user = await User.create({
          email: 'harry@hogwarts.edu',
          password: 'alohomora',
          firstName: 'Harry',
          lastName: 'Potter',
          house: 'Gryffindor',
          phone: '(555) 123-4567',
        })
      })

      it('returns true if the password is correct', () => {
        expect(user.correctPassword('alohomora')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(user.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
