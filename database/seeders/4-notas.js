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
            'Nota',
            [
                {
                    id: 1,
                    fecha: new Date(2025, 0, 12, 10),
                    descripcion:
                        'Se observa inflamación leve en articulación, se indica reposo y crioterapia.',
                    motivo: 'Dolor en rodilla tras esfuerzo físico.',
                    doctor: 'Martín González',
                    AfiliadoId: 1,
                },
                {
                    id: 2,
                    fecha: new Date(2025, 2, 5, 11, 30),
                    descripcion:
                        'Se solicita laboratorio completo y control cardíaco por antecedente familiar.',
                    motivo: 'Control de rutina.',
                    doctor: 'Laura Benítez',
                    AfiliadoId: 1,
                },
                {
                    id: 3,
                    fecha: new Date(2025, 7, 22, 15, 45),
                    descripcion:
                        'Se indica antiinflamatorio y seguimiento a los 7 días.',
                    motivo: 'Dolor lumbar persistente.',
                    doctor: 'Martín González',
                    AfiliadoId: 1,
                },
                {
                    id: 4,
                    fecha: new Date(2025, 1, 18, 10, 30),
                    descripcion:
                        'Se observa erupción alérgica, se indica antihistamínico y evitar exposición solar.',
                    motivo: 'Alergia cutánea.',
                    doctor: 'Paula Romero',
                    AfiliadoId: 2,
                },
                {
                    id: 5,
                    fecha: new Date(2025, 5, 14, 9, 45),
                    descripcion:
                        'Se toma radiografía, no se observan fracturas. Reposo deportivo por 10 días.',
                    motivo: 'Caída en práctica deportiva.',
                    doctor: 'Martín González',
                    AfiliadoId: 2,
                },
                {
                    id: 6,
                    fecha: new Date(2025, 8, 21, 14, 15),
                    descripcion:
                        'Se realiza control por dolor estomacal. Se sugiere dieta blanda 72h.',
                    motivo: 'Molestias gastrointestinales.',
                    doctor: 'Paula Romero',
                    AfiliadoId: 2,
                },
                {
                    id: 7,
                    fecha: new Date(2025, 3, 7, 9),
                    descripcion:
                        'Se registra mejora respiratoria luego de antibióticos. Alta médica.',
                    motivo: 'Bronquitis.',
                    doctor: 'Esteban Ruiz',
                    AfiliadoId: 3,
                },
                {
                    id: 8,
                    fecha: new Date(2025, 6, 3, 10),
                    descripcion:
                        'Dolor cervical por mala postura. Se indica kinesiología.',
                    motivo: 'Dolor en cuello y hombros.',
                    doctor: 'Martín González',
                    AfiliadoId: 3,
                },
                {
                    id: 9,
                    fecha: new Date(2025, 9, 10, 12, 45),
                    descripcion:
                        'Se indica analgésico suave y estiramientos diarios.',
                    motivo: 'Cefaleas tensionales.',
                    doctor: 'Esteban Ruiz',
                    AfiliadoId: 3,
                },
                {
                    id: 10,
                    fecha: new Date(2025, 2, 2, 11, 30),
                    descripcion:
                        'Control de presión arterial. Se ajusta medicación.',
                    motivo: 'Hipertensión.',
                    doctor: 'Laura Benítez',
                    AfiliadoId: 4,
                },
                {
                    id: 11,
                    fecha: new Date(2025, 5, 16, 12, 15),
                    descripcion:
                        'Se detecta infección urinaria. Se indica antibiótico 7 días.',
                    motivo: 'Dolor al orinar.',
                    doctor: 'Esteban Ruiz',
                    AfiliadoId: 4,
                },
                {
                    id: 12,
                    fecha: new Date(2025, 10, 1, 16, 15),
                    descripcion:
                        'Dolor de cabeza persistente. Se solicita tomografía preventiva.',
                    motivo: 'Migrañas frecuentes.',
                    doctor: 'Laura Benítez',
                    AfiliadoId: 4,
                },
                {
                    id: 13,
                    fecha: new Date(2025, 4, 13, 13, 20),
                    descripcion:
                        'Se observan signos de gastritis. Se receta omeprazol por 20 días.',
                    motivo: 'Ardor y malestar estomacal.',
                    doctor: 'Martín González',
                    AfiliadoId: 5,
                },
                {
                    id: 14,
                    fecha: new Date(2025, 8, 10, 10, 30),
                    descripcion:
                        'Control post-operatorio. Buena cicatrización, sin complicaciones.',
                    motivo: 'Seguimiento de cirugía previa.',
                    doctor: 'Laura Benítez',
                    AfiliadoId: 5,
                },
                {
                    id: 15,
                    fecha: new Date(2025, 11, 1, 12),
                    descripcion:
                        'Se retira yeso, movilidad conservada. Se indica rehabilitación física.',
                    motivo: 'Recuperación post-fractura.',
                    doctor: 'Esteban Ruiz',
                    AfiliadoId: 5,
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
        await queryInterface.bulkDelete('Nota', null, {});
    },
};
