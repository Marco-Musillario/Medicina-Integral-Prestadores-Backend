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
            'Prestadors',
            [
                {
                    id: 1,
                    nombre: 'Clinica del sol',
                    esCentro: true,
                    contraseña:
                        '$2b$10$AQOdiRldBGJuMTGTpOhvy.fkBZC4AQ2AZccMNyKW8LHnFn0f6r.3i',
                },
                {
                    id: 2,
                    nombre: 'Paula Rodriguez',
                    esCentro: false,
                    contraseña:
                        '$2b$10$GNi1Jj7eGJAV0xH2IYX86efwTokJ9.SdLDbK9mhItxxRjFpaHeS2y',
                    centroId: 1,
                },
                {
                    id: 3,
                    nombre: 'Roberto Gomez',
                    esCentro: false,
                    contraseña:
                        '$2b$10$Q2gKkgDM9MEaQRfOVQsjOurAyMAYYmp2.apqbzq9He8vjFzjt.X8G',
                    centroId: 1,
                },
                {
                    id: 4,
                    nombre: 'Pedro Martinez',
                    esCentro: false,
                    contraseña:
                        '$2b$10$VfjYPsYaWJ8K0ezqJ1BvVOSvHwz3KX5uZOVYvTrUpyoal3spBsP/.',
                    centroId: 1,
                },
                {
                    id: 5,
                    nombre: 'Paulo Almada',
                    esCentro: false,
                    contraseña:
                        '$2b$10$X1FXuzfxjdpC6rOyjQbNwO7hQYJ31RmQvru26h1NzC26LJlca46QS',
                    centroId: null,
                },
                {
                    id: 6,
                    nombre: 'Fernando Saralegui',
                    esCentro: false,
                    contraseña:
                        '$2b$10$EfPh0VDRuTxJmcYDvn633OIwHPpAmMnELtoWxkwx/RoqdA.AeC4M.',
                    centroId: null,
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
        await queryInterface.bulkDelete('Prestadors', null, {});
    },
};
