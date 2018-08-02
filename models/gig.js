'use strict';
module.exports = (sequelize, DataTypes) => {
  var Gig = sequelize.define('Gig', {
    schedule: DataTypes.DATE,
    price: DataTypes.INTEGER,
    name: DataTypes.STRING,
    venueId: DataTypes.INTEGER,
    artistId: DataTypes.INTEGER
  }, {});
  Gig.associate = function (models) {
    let Artist = models.Artist
    let Venue = models.Venue
    let Ticket = models.Ticket
    
    Gig.belongsTo(Artist, { foreignKey: 'artistId' })
    Gig.belongsTo(Venue, { foreignKey: 'venueId' })
    Gig.hasMany(Ticket, { foreignKey: 'gigId' })
  };
  return Gig;
};