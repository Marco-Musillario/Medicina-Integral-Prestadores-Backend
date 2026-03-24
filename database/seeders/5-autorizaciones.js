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
            'Autorizaciones',
            [
                {
                    id: 1,
                    fecha: new Date(2025, 1, 12, 15, 30, 0, 0),
                    estado: 'Recibido',
                    asunto: 'Estudio por arritmia cardíaca',
                    lugar: 'Clínica Nueva Salud',
                    observacion:
                        'Solicito autorización para monitoreo Holter de 48 horas por antecedentes de taquicardia.',
                    AfiliadoId: 4,
                    PrestadorId: null,
                    especialidad: 'Cardiologia',
                    diasDeInternacion: '0 dias',
                },
                {
                    id: 2,
                    fecha: new Date(2025, 5, 11, 16, 0, 0, 0),
                    estado: 'Recibido',
                    asunto: 'Resonancia magnética de rodilla',
                    lugar: 'Centro Médico El Sol',
                    observacion:
                        'Solicito autorización para resonancia magnética por sospecha de rotura ligamentaria.',
                    AfiliadoId: 5,
                    PrestadorId: null,
                    especialidad: 'Traumatología',
                    diasDeInternacion: '0 días',
                },
                {
                    id: 3,
                    fecha: new Date(2025, 7, 22, 10, 45, 0, 0),
                    estado: 'Recibido',
                    asunto: 'Cirugía ocular con láser',
                    lugar: 'Clínica de la Visión Belgrano',
                    observacion:
                        'Solicito autorización para corrección láser por miopía severa.',
                    AfiliadoId: 2,
                    PrestadorId: null,
                    especialidad: 'Oftalmología',
                    diasDeInternacion: '0 días',
                },
                {
                    id: 4,
                    fecha: new Date(2025, 4, 5, 9, 0, 0, 0),
                    estado: 'Recibido',
                    asunto: 'Cirugía de meniscos',
                    lugar: 'Hospital Juan Cruz',
                    observacion:
                        'Solicito autorización para artroscopía de rodilla por desgarro de menisco interno.',
                    AfiliadoId: 5,
                    PrestadorId: null,
                    especialidad: 'Traumatología',
                    diasDeInternacion: '1 día',
                },
                {
                    id: 5,
                    fecha: new Date(2025, 2, 8, 8, 0, 0, 0),
                    estado: 'Recibido',
                    asunto: 'Cirugía de amígdalas',
                    lugar: 'Sanatorio Nuestra Señora',
                    observacion:
                        'Solicito autorización para amigdalectomía por infecciones respiratorias recurrentes.',
                    AfiliadoId: 3,
                    PrestadorId: null,
                    especialidad: 'Otorrinolaringología',
                    diasDeInternacion: '2 días',
                },
                {
                    id: 6,
                    fecha: new Date(2025, 4, 28, 13, 15, 0, 0),
                    estado: 'Recibido',
                    asunto: 'Cirugía de vesícula',
                    lugar: 'Clínica Nueva Salud',
                    observacion:
                        'Solicito autorización para colecistectomía laparoscópica por cálculos biliares.',
                    AfiliadoId: 4,
                    PrestadorId: null,
                    especialidad: 'Cirugía General',
                    diasDeInternacion: '2 días',
                },
                {
                    id: 7,
                    fecha: new Date(2025, 0, 20, 10, 0, 0, 0),
                    estado: 'Recibido',
                    asunto: 'Cirugía de hernia inguinal',
                    lugar: 'Hospital San Lucas',
                    observacion:
                        'Solicito autorización para cirugía programada de hernia inguinal con seguimiento posoperatorio.',
                    AfiliadoId: 1,
                    PrestadorId: null,
                    especialidad: 'Cirugía General',
                    diasDeInternacion: '3 días',
                },
                {
                    id: 8,
                    fecha: new Date(2025, 3, 17, 12, 0, 0, 0),
                    estado: 'Recibido',
                    asunto: 'Cesárea programada',
                    lugar: 'Hospital San Lucas',
                    observacion:
                        'Solicito autorización para cesárea programada con internación previa y posterior control neonatal.',
                    AfiliadoId: 2,
                    PrestadorId: null,
                    especialidad: 'Ginecología / Obstetricia',
                    diasDeInternacion: '4 días',
                },
                {
                    id: 9,
                    fecha: new Date(2025, 8, 10, 18, 31, 57, 0),
                    estado: 'Recibido',
                    asunto: 'Internación por infección urinaria grave',
                    lugar: 'Sanatorio Nuestra Señora',
                    observacion:
                        'Solicito autorización para internación y tratamiento endovenoso por pielonefritis.',
                    AfiliadoId: 3,
                    PrestadorId: null,
                    especialidad: 'Clínica Médica',
                    diasDeInternacion: '4 días',
                },
                {
                    id: 10,
                    fecha: new Date(2025, 6, 4, 23, 47, 23, 0),
                    estado: 'Recibido',
                    asunto: 'Internación por neumonía',
                    lugar: 'Hospital San Lucas',
                    observacion:
                        'Solicito autorización para internación y tratamiento antibiótico intravenoso por neumonía bacteriana.',
                    AfiliadoId: 1,
                    PrestadorId: null,
                    especialidad: 'Neumonología',
                    diasDeInternacion: '5 días',
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
        await queryInterface.bulkDelete('Autorizaciones', null, {});
    },
};
