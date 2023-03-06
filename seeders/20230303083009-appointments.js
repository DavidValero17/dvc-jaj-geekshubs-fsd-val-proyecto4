'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('Appointments', [
      { id: 1, date: "2023-10-10", hour: "00:00:00", price: 250, about: "Ortodoncia realizada", doctor_id: 1, client_id: 1, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 2, date: "2023-10-10", hour: "00:00:00", price: 111, about: "Consulta y vista del estado del paciente", doctor_id: 2, client_id: 2, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 3, date: "2023-10-10", hour: "00:00:00", price: 20.5, about: "Revision semanal", doctor_id: 2, client_id: 2, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 4, date: "2023-10-10", hour: "00:00:00", price: 75.7, about: "Empaste hecho y revision", doctor_id: 1, client_id: 2, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 5, date: "2023-10-10", hour: "00:00:00", price: 50, about: "Consulta rutinaria", doctor_id: 2, client_id: 3, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
      { id: 6, date: "2023-10-10", hour: "00:00:00", price: 10, about: "Primera cita", doctor_id: 1, client_id: 3, createdAt: "2023-12-12 00:00:00", updatedAt: "2023-12-12 00:00:00" },
    ],
      {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
