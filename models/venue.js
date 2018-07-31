'use strict';
module.exports = (sequelize, DataTypes) => {
  var Venue = sequelize.define('Venue', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    capacity: DataTypes.INTEGER
  }, {});
  Venue.associate = function(models) {
    // associations can be defined here
  };
  return Venue;
};