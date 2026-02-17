'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert(
            'Afiliados',
            [
                {
                    id: 1,
                    numeroGrupoFamiliar: 1001,
                    numeroIntegrante: 1,
                    nombre: 'Juan',
                    apellido: 'Perez',
                    parentesco: 'Titular',
                },
                {
                    id: 2,
                    numeroGrupoFamiliar: 1001,
                    numeroIntegrante: 2,
                    nombre: 'Carla',
                    apellido: 'Perez',
                    parentesco: 'Conyuge',
                },
                {
                    id: 3,
                    numeroGrupoFamiliar: 1001,
                    numeroIntegrante: 3,
                    nombre: 'Andrea',
                    apellido: 'Perez',
                    parentesco: 'Hijo/a',
                },
                {
                    id: 4,
                    numeroGrupoFamiliar: 1002,
                    numeroIntegrante: 1,
                    nombre: 'Silvia',
                    apellido: 'Rodriguez',
                    parentesco: 'Titular',
                },
                {
                    id: 5,
                    numeroGrupoFamiliar: 1002,
                    numeroIntegrante: 2,
                    nombre: 'Pedro',
                    apellido: 'Rodriguez',
                    parentesco: 'Hijo/a',
                },
                {
                    id: 6,
                    numeroGrupoFamiliar: 1003,
                    numeroIntegrante: 1,
                    nombre: 'Roberto',
                    apellido: 'Garcia',
                    parentesco: 'Titular',
                },
                {
                    id: 7,
                    numeroGrupoFamiliar: 1003,
                    numeroIntegrante: 2,
                    nombre: 'Laura',
                    apellido: 'Garcia',
                    parentesco: 'Conyuge',
                },
                {
                    id: 8,
                    numeroGrupoFamiliar: 1003,
                    numeroIntegrante: 3,
                    nombre: 'Martina',
                    apellido: 'Garcia',
                    parentesco: 'Hijo/a',
                },
                {
                    id: 9,
                    numeroGrupoFamiliar: 1004,
                    numeroIntegrante: 1,
                    nombre: 'Diego',
                    apellido: 'Fernandez',
                    parentesco: 'Titular',
                },
                {
                    id: 10,
                    numeroGrupoFamiliar: 1004,
                    numeroIntegrante: 2,
                    nombre: 'Lucia',
                    apellido: 'Fernandez',
                    parentesco: 'Hijo/a',
                },
                {
                    id: 11,
                    numeroGrupoFamiliar: 1005,
                    numeroIntegrante: 1,
                    nombre: 'Esteban',
                    apellido: 'Lopez',
                    parentesco: 'Titular',
                },
                {
                    id: 12,
                    numeroGrupoFamiliar: 1005,
                    numeroIntegrante: 2,
                    nombre: 'Brenda',
                    apellido: 'Lopez',
                    parentesco: 'Hijo/a',
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Afiliados', null, {});
    },
};
