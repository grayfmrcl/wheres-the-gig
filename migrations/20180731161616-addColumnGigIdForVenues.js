'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Venues','gigId',{
      type : Sequelize.INTEGER
    })
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
