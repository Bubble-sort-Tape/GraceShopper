/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/users/', () => {
    const testUsers = [
      {
        email: 'dumbledore@hogwarts.edu',
        password: 'nitwitblubberoddmenttweak',
        firstName: 'Albus',
        lastName: 'Dumbledore',
        house: 'Gryffindor',
        isAdmin: true,
      },
      {
        email: 'snape@hogwarts.edu',
        password: 'lily',
        firstName: 'Severus',
        lastName: 'Snape',
        house: 'Slytherin',
        isAdmin: true,
      },
      {
        email: 'voldemort@deatheaters.net',
        password: 'horcrux',
        firstName: 'Tom',
        lastName: 'Riddle',
        house: 'Slytherin',
      },
    ]

    beforeEach(async () => {
      for (let user of testUsers) {
        User.create(user)
      }
    })

    describe('GET /api/users API Route', async () => {
      it('rejects requests from guests', async () => {
        request(app).get('/api/users').expect(403)
      })

      //TODO: it('rejects requests from non-admins')
      //TODO: it('returns all users to admins')
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
