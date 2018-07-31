'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let artists = [{
      name: 'Cold Play',
      genre: 'Pop',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Lany',
      genre: 'Pop',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Oasis',
      genre: 'Rock',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Zedd',
      genre: 'EDM',
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    return queryInterface.bulkInsert('Artists', artists)
  },

  down: (queryInterface, Sequelize) => {
    
  }
};