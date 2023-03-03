const bcrypt = require('bcrypt');
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',[
      {id: 1 , name: "David", surname:"Valero Criado" ,phone:"666555444",email:"david@david.com",password:bcrypt.hashSync("admin", 10),role_id:1,createdAt:"2023-12-12 00:00:00",updatedAt:"2023-12-12 00:00:00"},
      {id: 2 , name: "Jordi", surname:"Jerico Lopez" ,phone:"666555444",email:"jordi@jordi.com",password:bcrypt.hashSync("admin", 10),role_id:1,createdAt:"2023-12-12 00:00:00",updatedAt:"2023-12-12 00:00:00"},
      {id: 3 , name: "Alyna", surname:"Nastas" ,phone:"666555444",email:"alyna@alyna.com",password:bcrypt.hashSync("user", 10),role_id:2,createdAt:"2023-12-12 00:00:00",updatedAt:"2023-12-12 00:00:00"},
      {id: 4 , name: "Ignacio", surname:"Furio Criado" ,phone:"666555444",email:"ignacio@ignacio.com",password:bcrypt.hashSync("user", 10),role_id:2,createdAt:"2023-12-12 00:00:00",updatedAt:"2023-12-12 00:00:00"},
      {id: 5 , name: "Mario", surname:"Aguilar Criado" ,phone:"666555444",email:"mario@mario.com",password:bcrypt.hashSync("user", 10),role_id:2,createdAt:"2023-12-12 00:00:00",updatedAt:"2023-12-12 00:00:00"},
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
