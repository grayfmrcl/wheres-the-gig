'use strict';
module.exports = (sequelize, DataTypes) => {
  var Artist = sequelize.define('Artist', {
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    gigId: DataTypes.INTEGER
  }, {});
  Artist.associate = function(models) {

    let Gig = models.Gig
    Artist.belongsTo(Gig,{foreignKey:'gigId'})
  };
  return Artist;
};