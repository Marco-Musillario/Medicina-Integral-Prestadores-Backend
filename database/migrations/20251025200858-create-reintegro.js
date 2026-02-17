'use strict';
/** @type {import('sequelize-cli').Migration} */
export default {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Reintegros', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            fechaDeSolicitud: {
                type: Sequelize.DATE,
            },
            estado: {
                type: Sequelize.STRING,
            },
            especialidad: {
                type: Sequelize.STRING,
            },
            lugar: {
                type: Sequelize.STRING,
            },
            asunto: {
                type: Sequelize.STRING,
            },
            fechaFactura: {
                type: Sequelize.DATE,
            },
            cuitFacturado: {
                type: Sequelize.STRING,
            },
            valorFacturado: {
                type: Sequelize.INTEGER,
            },
            personaFacturada: {
                type: Sequelize.STRING,
            },
            formaDePago: {
                type: Sequelize.STRING,
            },
            cbu: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable('Reintegros');
    },
};
