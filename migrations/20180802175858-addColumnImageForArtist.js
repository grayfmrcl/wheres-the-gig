'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn('Artists','image',{
     type : Sequelize.STRING
   })
  },

  down: (queryInterface, Sequelize) => {
   
  }
};
