'use strict';
const mailer = require('.././mailer')
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      validate: {
        len: { args: [3], msg: `Name length have to be at least 3 characters` }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: { msg: `Email is already in use` },
      validate: {
        isEmail: { msg: `Email is not valid` }
      }
    },
    password: DataTypes.STRING,

    passwordRaw: {
      type: DataTypes.VIRTUAL,
      validate: {
        is: {
          args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
          msg: `Password must be at least 8 characters or longer, contains at least 1 lowercase letter, 1 uppercase letter, and 1 number.`
        }
      }
    },

    isAdmin: DataTypes.BOOLEAN,
  }, {});
  User.associate = function (models) {
    const Ticket = models.Ticket
    User.hasMany(Ticket, { foreignKey: 'customerId' })
  };
  User.hook('afterCreate', (user, options) => {
    console.log('============== success sent email to user ==============')
    mailer(user.email)
});
  return User;
};