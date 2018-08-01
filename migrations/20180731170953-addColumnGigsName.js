'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Gigs','name',{
      type : Sequelize.STRING
    })
  },

  down: (queryInterface, Sequelize) => {
 
  }
};
