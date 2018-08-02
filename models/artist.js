'use strict';

module.exports = (sequelize, DataTypes) => {
  var Artist = sequelize.define('Artist', {
    name: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {});
  Artist.associate = function(models) {

    let Gig = models.Gig
    //Artist.belongsTo(Gig,{foreignKey:'gigId'})
    Artist.hasMany(Gig,{foreignKey:'artistId'})
  };

  return Artist;
};