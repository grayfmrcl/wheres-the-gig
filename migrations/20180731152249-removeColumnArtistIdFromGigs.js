'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.removeColumn('Gigs','artistId')
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
