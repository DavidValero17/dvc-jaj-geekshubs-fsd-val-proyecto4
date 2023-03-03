'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {    
    async up(queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Clients',[
        {id: 1 , user_id: 3},
        {id: 2 , user_id: 6},
        {id: 3 , user_id: 7},
      ], 
      {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
