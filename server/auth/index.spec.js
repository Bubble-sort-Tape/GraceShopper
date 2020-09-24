/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('Auth routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/users/', () => {
    const voldy = {
      email: 'noname@deatheater.net',
      firstName: 'Thomas',
      lastName: 'Riddle',
      house: 'Slytherin',
      password: 'horcrux',
      isAdmin: true,
    }

    describe('GET /auth/me', () => {
      it('returns 404 and no data if not logged in', async () => {
        const res = await request(app).get('/auth/me').expect(404)
        expect(res.body).to.be.an('object')
        expect(res.body.email).to.equal(undefined)
      })
      //TODO: it('returns user if session has login)
      /*
      it('returns 200 and user data if not logged in', async () => {
        const res = await request(app).get('/auth/me').expect(200)
        expect(res.body).to.be.an('object')
        expect(res.body.email).to.equal(undefined)
      }) */
    })

    describe('POST /auth/signup', async () => {
      //TODO: Set session in test
      /* const res = await request(app)
        .post('/auth/signup')
        .send(voldy)
        .expect(200)

      it('returns the created user', () => {
        expect(res.body).to.be.an('object')
        expect(res.body.email).to.be.equal(voldy.email)
      })
      it('does not allow users to set self as admin', () => {
        expect(res.body.isAdmin).to.be.equal(false)
      }) */
    })

    it('POST /auth/login', async () => {
      // const res = await request(app).post('/auth/login').send(voldy).expect(200)
      //TODO: Set session in test
    })

    it('POST /auth/logout', async () => {
      // const res = await request(app).post('/auth/logout').expect(200)
      //TODO: Set session in test
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
