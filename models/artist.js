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