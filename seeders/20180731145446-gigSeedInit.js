'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let gigs = [{
      venueId: 1,
      artistId: 1,
      schedule: '2018-10-12',
      price: 150000,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      venueId: 1,
      artistId: 2,
      schedule: '2018-10-12',
      price: 150000,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      venueId: 2,
      artistId: 3,
      schedule: '2018-11-25',
      price: 250000,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      venueId: 2,
      artistId: 4,
      schedule: '2018-11-25',
      price: 250000,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      venueId: 3,
      artistId: 2,
      schedule: '2018-2-5',
      price: 350000,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      venueId: 4,
      artistId: 4,
      schedule: '2018-3-1',
      price: 150000,
      createdAt : new Date(),
      updatedAt : new Date()
    }]
    return queryInterface.bulkInsert('Gigs', gigs)
  },

  down: (queryInterface, Sequelize) => {
   
  }
};