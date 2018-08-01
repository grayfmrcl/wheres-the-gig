'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Artists','gigId',{
      type : Sequelize.INTEGER
    })
  },

  down: (queryInterface, Sequelize) => {
   
  }
};
