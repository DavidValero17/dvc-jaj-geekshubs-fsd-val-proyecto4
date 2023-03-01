'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      hour: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      about: {
        type: Sequelize.STRING
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        references: {

          model: 'Doctors',
          key: 'id'
          
        }
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: {

          model: 'Clients',
          key: 'id'

        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments');
  }
};