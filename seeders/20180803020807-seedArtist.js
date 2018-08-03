'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Artists',[{
      name : 'The Beatles',
      genre : 'rock',
      image : 'beatles.jpg',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : '50 Second To Mars',
      genre : 'alternative rock',
      image : '50secondToMars.jpg',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'Blink182',
      genre : 'punk',
      image : 'blink182.jpg',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'Bob Dylan',
      genre : 'blues',
      image : 'bobDylan.jpg',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'Nirvana',
      genre : 'grunge',
      image : 'nirvana.jpg',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'Pearl Jam',
      genre : 'alternative rock',
      image : 'pearlJam.jpg',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'Queen',
      genre : 'rock',
      image : 'queen.jpg',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'Tame Impala',
      genre : 'psychedelic',
      image : 'tameimpala.jpg',
      createdAt : new Date(),
      updatedAt : new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Artists',[{
      name : 'The Beatles',
      genre : 'rock',
      image : 'beatles.jpg'
    },{
      name : '50 Second To Mars',
      genre : 'alternative rock',
      image : '50secondToMars.jpg'
    },{
      name : 'Blink182',
      genre : 'punk',
      image : 'blink182.jpg'
    },{
      name : 'Bob Dylan',
      genre : 'blues',
      image : 'bobDylan.jpg'
    },{
      name : 'Nirvana',
      genre : 'grunge',
      image : 'nirvana.jpg'
    },{
      name : 'Pearl Jam',
      genre : 'alternative rock',
      image : 'pearlJam.jpg'
    },{
      name : 'Queen',
      genre : 'rock',
      image : 'queen.jpg'
    },{
      name : 'Tame Impala',
      genre : 'psychedelic',
      image : 'tameimpala.jpg'
    }])
  }
};
