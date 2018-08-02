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

  
// Artist.hook('beforeDelete', (Artist, options) => {
//       let Gig = sequelize.models.Gig
//       Gig.findAll({
//         where : { 
//           artistId : Artist.id
//         }
//       })
//       .then(gigs => {
//           gigs.update({
//             artistId : 1
//           })
//           .then( test => console.log(test))
//       })
      
// });
  return Artist;
};