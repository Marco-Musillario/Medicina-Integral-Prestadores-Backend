'use strict';
/** @type {import('sequelize-cli').Migration} */
export default {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Recetas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            fecha: {
                type: Sequelize.DATE,
            },
            estado: {
                type: Sequelize.STRING,
            },
            asunto: {
                type: Sequelize.STRING,
            },
            medicamento: {
                type: Sequelize.STRING,
            },
            cantidad: {
                type: Sequelize.INTEGER,
            },
            presentacion: {
                type: Sequelize.STRING,
            },
            observacion: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Recetas');
    },
};
