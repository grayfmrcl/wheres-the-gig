'use strict';
module.exports = (sequelize, DataTypes) => {
  var Gig = sequelize.define('Gig', {
    schedule: DataTypes.DATE,
    price: DataTypes.INTEGER,
    name: DataTypes.STRING,
    venueId : DataTypes.INTEGER,
    artistId : DataTypes.INTEGER
  }, {});
  Gig.associate = function(models) {
    let Artist = models.Artist
    let Venue = models.Venue
    Gig.belongsTo(Artist,{foreignKey:'artistId'})
    Gig.belongsTo(Venue,{foreignKey:'venueId'})
    // Gig.hasMany(Artist,{foreignKey:'gigId'})
    // Gig.hasMany(Venue,{foreignKey:'gigId'})
  };
  return Gig;
};