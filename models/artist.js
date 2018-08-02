'use strict';

module.exports = (sequelize, DataTypes) => {
  var Artist = sequelize.define('Artist', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: `Name is required` }
      }
    },
    genre: DataTypes.STRING
  }, {});
  Artist.associate = function (models) {

    let Gig = models.Gig
    Artist.hasMany(Gig, { foreignKey: 'artistId' })
  };

  return Artist;
};