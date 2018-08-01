'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Gigs','venueId')
  },

  down: (queryInterface, Sequelize) => {
   
  }
};
