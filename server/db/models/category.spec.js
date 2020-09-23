const {expect} = require('chai')
const db = require('../index')
const Category = db.model('category')

describe('Category model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Correct data', () => {
    describe('categoryInstance', () => {
      let category
      beforeEach(async () => {
        category = await Category.create({
          name: 'Candy',
        })
      })

      it('produces correct category name', () => {
        expect(category.name).to.be.equal('Candy')
      })
    })
  })
})
