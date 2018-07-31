'use strict';
module.exports = (sequelize, DataTypes) => {
  var Venue = sequelize.define('Venue', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    gigId : DataTypes.INTEGER
  }, {});
  Venue.associate = function(models) {
    let Gig = models.Gig
    Venue.belongsTo(Gig,{foreignKey:'gigId'})
  };
  return Venue;
};