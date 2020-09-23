const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define(
  'user',
  {
    // email validation
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: {isEmail: true},
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      notEmpty: true,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    house: {
      type: Sequelize.ENUM,
      values: ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'],
    },
    phone: {
      type: Sequelize.STRING,
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    password: {
      type: Sequelize.STRING,
      get() {
        return () => this.getDataValue('password')
      },
    },
    salt: {
      type: Sequelize.STRING,
      get() {
        return () => this.getDataValue('salt')
      },
    },
    googleId: {
      type: Sequelize.STRING,
    },
  },
  {
    hooks: {
      beforeCreate: setSaltAndPassword,
      beforeUpdate: setSaltAndPassword,
    },
  }
)

module.exports = User

/**
 * instanceMethods
 */
User.prototype.correctPassword = function (candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt()) === this.password()
}

/**
 * classMethods
 */
User.prototype.sanitize = () => {
  return crypto.randomBytes(16).toString('base64')
}

User.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64')
}

User.encryptPassword = function (plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

function setSaltAndPassword(user) {
  if (user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password(), user.salt())
  }
}
