'use strict';
const mailer = require('.././mailer')
module.exports = (sequelize, DataTypes) => {
  var Ticket = sequelize.define('Ticket', {
    customerId: DataTypes.INTEGER,
    gigId: DataTypes.INTEGER
  }, {});
  Ticket.associate = function (models) {
    const User = models.User
    const Gig = models.Gig
    Ticket.belongsTo(User, { foreignKey: 'customerId' })
    Ticket.belongsTo(Gig, { foreignKey: 'gigId' })
  };

  Ticket.hook('afterCreate', (ticket, options) => {
    console.log('============== success sent email to user ==============')
    let User = sequelize.models.User

    User.findById(ticket.customerId)
      .then((customer) => mailer(customer.email))
      .catch(err => console.log(err))
    });
  return Ticket;
};