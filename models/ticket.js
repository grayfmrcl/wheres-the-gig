'use strict';
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
  return Ticket;
};