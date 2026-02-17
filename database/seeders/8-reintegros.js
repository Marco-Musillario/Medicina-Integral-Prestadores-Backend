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
            'Reintegros',
            [
                {
                    id: 1,
                    fecha: new Date(2025, 9, 16),
                    estado: 'Recibido',
                    asunto: 'Internación',
                    especialidad: 'Cardiología',
                    lugar: 'Hospital Juan Cruz',
                    fechaFactura: new Date(2025, 9, 20),
                    cuitFacturado: '20-44157515-0',
                    valorFacturado: 15000,
                    personaFacturada: 'Juan Perez',
                    formaDePago: 'Transferencia',
                    cbu: 5739978261,
                    observacion:
                        'Cirugía de bypass realizada según indicación médica. Se solicita reintegro según cobertura del plan.',
                    AfiliadoId: 1,
                    PrestadorId: null,
                },
                {
                    id: 2,
                    fecha: new Date(2025, 9, 18),
                    estado: 'En análisis',
                    asunto: 'Consulta médica',
                    especialidad: 'Dermatología',
                    lugar: 'Clínica Nueva Salud',
                    fechaFactura: new Date(2025, 9, 19),
                    cuitFacturado: '27-32915846-6',
                    valorFacturado: 3500,
                    personaFacturada: 'Carla Perez',
                    formaDePago: 'Transferencia',
                    cbu: 2348812235,
                    observacion:
                        'Consulta por alergia cutánea con prescripción de tratamiento. Se presenta factura y se solicita reintegro según plan.',
                    AfiliadoId: 2,
                    PrestadorId: 2,
                },
                {
                    id: 3,
                    fecha: new Date(2025, 9, 10),
                    estado: 'Aprobado',
                    asunto: 'Estudios de rutina',
                    especialidad: 'Traumatología',
                    lugar: 'Hospital Juan Cruz',
                    fechaFactura: new Date(2025, 9, 11),
                    cuitFacturado: '20-40259814-3',
                    valorFacturado: 7800,
                    personaFacturada: 'Pedro Rodriguez',
                    formaDePago: 'Transferencia',
                    cbu: 8839201145,
                    observacion: 'Radiografía de rodilla izquierda',
                    AfiliadoId: 5,
                    PrestadorId: 2,
                },
                {
                    id: 4,
                    fecha: new Date(2025, 9, 22),
                    estado: 'Observado',
                    asunto: 'Internación',
                    especialidad: 'Pediatría',
                    lugar: 'Sanatorio Nuestra Señora',
                    fechaFactura: new Date(2025, 9, 23),
                    cuitFacturado: '23-11824557-4',
                    valorFacturado: 15000,
                    personaFacturada: 'Andrea Perez',
                    formaDePago: 'Transferencia',
                    cbu: 5590128756,
                    observacion:
                        'Internación con control mensual de recuperación. Se solicita reintegro según cobertura del plan.',
                    AfiliadoId: 3,
                    PrestadorId: 2,
                },
                {
                    id: 5,
                    fecha: new Date(2025, 9, 5),
                    estado: 'Rechazado',
                    asunto: 'Urgencia médica',
                    especialidad: 'Clínico General',
                    lugar: 'Centro Médico El Sol',
                    fechaFactura: new Date(2025, 9, 6),
                    cuitFacturado: '27-55719423-7',
                    valorFacturado: 5200,
                    personaFacturada: 'Silvia Rodriguez',
                    formaDePago: 'Transferencia',
                    cbu: 6674821902,
                    observacion:
                        'Evaluación clínica en urgencia con estudios complementarios. Se solicita reintegro según cobertura del plan.',
                    AfiliadoId: 4,
                    PrestadorId: 2,
                },
                {
                    id: 6,
                    fecha: new Date(2025, 10, 1),
                    estado: 'Recibido',
                    asunto: 'Laboratorio',
                    especialidad: 'Hematología',
                    lugar: 'Centro Médico El Sol',
                    fechaFactura: new Date(2025, 10, 2),
                    cuitFacturado: '20-44157515-0',
                    valorFacturado: 4200,
                    personaFacturada: 'Juan Perez',
                    formaDePago: 'Transferencia',
                    cbu: 5739978261,
                    observacion:
                        'Análisis de sangre preoperatorio solicitado para intervención programada. Se presenta factura para reintegro.',
                    AfiliadoId: 1,
                    PrestadorId: null,
                },
                {
                    id: 7,
                    fecha: new Date(2025, 8, 28),
                    estado: 'En análisis',
                    asunto: 'Radiografía',
                    especialidad: 'Traumatología',
                    lugar: 'Hospital Juan Cruz',
                    fechaFactura: new Date(2025, 8, 29),
                    cuitFacturado: '27-55719423-7',
                    valorFacturado: 6500,
                    personaFacturada: 'Silvia Rodriguez',
                    formaDePago: 'Transferencia',
                    cbu: 6674821902,
                    observacion:
                        'Radiografía de control post fractura de tibia. Se presenta factura y se solicita reintegro según cobertura.',
                    AfiliadoId: 4,
                    PrestadorId: 2,
                },
                {
                    id: 8,
                    fecha: new Date(2025, 7, 12),
                    estado: 'Observado',
                    asunto: 'Internación',
                    especialidad: 'Ginecología',
                    lugar: 'Sanatorio Nuestra Señora',
                    fechaFactura: new Date(2025, 7, 14),
                    cuitFacturado: '27-32915846-6',
                    valorFacturado: 23000,
                    personaFacturada: 'Carla Perez',
                    formaDePago: 'Transferencia',
                    cbu: 2348812235,
                    observacion:
                        'Internación con seguimiento posoperatorio. Se solicita reintegro según cobertura del plan.',
                    AfiliadoId: 2,
                    PrestadorId: 2,
                },
                {
                    id: 9,
                    fecha: new Date(2025, 6, 22),
                    estado: 'Aprobado',
                    asunto: 'Consulta médica',
                    especialidad: 'Neurología',
                    lugar: 'Clínica Nueva Salud',
                    fechaFactura: new Date(2025, 6, 23),
                    cuitFacturado: '20-40259814-3',
                    valorFacturado: 9800,
                    personaFacturada: 'Pedro Rodriguez',
                    formaDePago: 'Transferencia',
                    cbu: 8839201145,
                    observacion:
                        'Consulta médica por migrañas crónicas con estudios complementarios. Se solicita reintegro según plan.',
                    AfiliadoId: 5,
                    PrestadorId: 2,
                },
                {
                    id: 10,
                    fecha: new Date(2025, 10, 3),
                    estado: 'Rechazado',
                    asunto: 'Laboratorio',
                    especialidad: 'Bioquímica',
                    lugar: 'Hospital Juan Cruz',
                    fechaFactura: new Date(2025, 10, 4),
                    cuitFacturado: '23-11824557-4',
                    valorFacturado: 2500,
                    personaFacturada: 'Andrea Perez',
                    formaDePago: 'Transferencia',
                    cbu: 5590128756,
                    observacion:
                        'Estudio de laboratorio sin resultados concluyentes; se requerirá nueva muestra. Se presenta factura para reintegro.',
                    AfiliadoId: 5,
                    PrestadorId: 2,
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
        await queryInterface.bulkDelete('Reintegros', null, {});
    },
};
