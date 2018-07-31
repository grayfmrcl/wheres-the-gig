'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let venues = [{
      name: 'Hard Rock Cafe Jakarta',
      location: 'Jl Jend Sudirman Kav 54-55 No. 52-53 Mall Pacific Place, Ground Floor, unit G-05, RT.5/RW.3, Senayan, Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190',
      capacity: 100,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      name: 'The Peoples Cafe',
      location: 'Jl. M.H. Thamrin No.1, Kb. Melati, Tanahabang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10310',
      capacity: 70,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      name: 'Rolling Stone Cafe',
      location: 'Jl. Ampera Raya No.16, RT.4/RW.4, Cilandak Tim., Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12560',
      capacity: 95,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      name: 'The Cascade Lounge',
      location: 'Hotel Mulia Senayan, Jl. Asia Afrika, RT.1/RW.3, Gelora, RT.1/RW.3, Gelora, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270',
      capacity: 120,
      createdAt : new Date(),
      updatedAt : new Date()
    }]
    return queryInterface.bulkInsert('Venues', venues)
  },

  down: (queryInterface, Sequelize) => {

  }
};