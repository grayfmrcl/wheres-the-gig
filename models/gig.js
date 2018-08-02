'use strict';
module.exports = (sequelize, DataTypes) => {
  var Gig = sequelize.define('Gig', {
    schedule: DataTypes.DATE,
    price: {type :DataTypes.INTEGER,
            validate : {
            not : {args :["[a-z]",'i'],msg : 'invalid input price,price must be a number'}
            }},
    name: {type :DataTypes.STRING,
      validate : {
      is : {args :[/[a-zA-Z-0-9]{8,}/],msg : 'invalid input name,minimum 8 character'}
      }},
    venueId : DataTypes.INTEGER,
    artistId : DataTypes.INTEGER
  }, {});
  Gig.associate = function(models) {
    let Artist = models.Artist
    let Venue = models.Venue
    Gig.belongsTo(Artist,{foreignKey:'artistId'})
    Gig.belongsTo(Venue,{foreignKey:'venueId'})

  };
  return Gig;
};