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
            'Receta',
            [
                {
                    id: 1,
                    fecha: new Date(2025, 0, 12),
                    estado: 'Recibido',
                    asunto: 'Migraña tensional',
                    medicamento: 'Ibuprofeno',
                    cantidad: 15,
                    presentacion: 'Tabletas de 400 mg',
                    observacion: 'Uso para dolor de cabeza ocasional',
                    AfiliadoId: 1,
                    PrestadorId: null,
                },
                {
                    id: 2,
                    fecha: new Date(2025, 1, 3),
                    estado: 'Recibido',
                    asunto: 'Alergia estacional',
                    medicamento: 'Loratadina',
                    cantidad: 30,
                    presentacion: 'Comprimidos de 10 mg',
                    observacion:
                        'Uso diario para síntomas de alergia estacional',
                    AfiliadoId: 2,
                    PrestadorId: null,
                },
                {
                    id: 3,
                    fecha: new Date(2025, 2, 5),
                    estado: 'Recibido',
                    asunto: 'Infección respiratoria leve',
                    medicamento: 'Amoxicilina',
                    cantidad: 21,
                    presentacion: 'Cápsulas de 500 mg',
                    observacion: 'Tratamiento por 7 días, tres dosis diarias',
                    AfiliadoId: 3,
                    PrestadorId: null,
                },
                {
                    id: 4,
                    fecha: new Date(2025, 3, 5),
                    estado: 'Recibido',
                    asunto: 'Dolor lumbar crónico',
                    medicamento: 'Diclofenac',
                    cantidad: 10,
                    presentacion: 'Tabletas de 50 mg',
                    observacion:
                        'Uso en episodios de dolor intenso, no exceder dosis recomendada',
                    AfiliadoId: 4,
                    PrestadorId: null,
                },
                {
                    id: 5,
                    fecha: new Date(2025, 3, 22),
                    estado: 'Recibido',
                    asunto: 'Insomnio',
                    medicamento: 'Melatonina',
                    cantidad: 20,
                    presentacion: 'Comprimidos de 3 mg',
                    observacion: 'Uso para episodios de insomnio crónico.',
                    AfiliadoId: 5,
                    PrestadorId: null,
                },
                {
                    id: 6,
                    fecha: new Date(2025, 4, 3),
                    estado: 'Recibido',
                    asunto: 'Migrañas recurrentes',
                    medicamento: 'Ibuprofeno',
                    cantidad: 30,
                    presentacion: 'Tabletas de 400 mg',
                    observacion:
                        'Uso para episodios de cefalea intensa. El afiliado refiere dolor pulsátil y sensibilidad a la luz.',
                    AfiliadoId: 1,
                    PrestadorId: null,
                },
                {
                    id: 7,
                    fecha: new Date(2025, 2, 27),
                    estado: 'Recibido',
                    asunto: 'Gastroenteritis',
                    medicamento: 'Sales de rehidratación oral',
                    cantidad: 5,
                    presentacion: 'Polvo para diluir',
                    observacion:
                        'El afiliado presentó diarrea y deshidratación leve. Se indicó reposición de líquidos y control de síntomas.',
                    AfiliadoId: 2,
                    PrestadorId: null,
                },
                {
                    id: 8,
                    fecha: new Date(2025, 5, 10),
                    estado: 'Recibido',
                    asunto: 'Hipertensión arterial',
                    medicamento: 'Enalapril',
                    cantidad: 60,
                    presentacion: 'Comprimidos de 10 mg',
                    observacion: 'Tratamiento de presión arterial elevada.',
                    AfiliadoId: 3,
                    PrestadorId: null,
                },
                {
                    id: 9,
                    fecha: new Date(2025, 1, 14),
                    estado: 'Recibido',
                    asunto: 'Sinusitis aguda',
                    medicamento: 'Amoxicilina',
                    cantidad: 15,
                    presentacion: 'Cápsulas de 500 mg',
                    observacion: 'Uso para infección sinusal.',
                    AfiliadoId: 4,
                    PrestadorId: null,
                },
                {
                    id: 10,
                    fecha: new Date(2025, 4, 19),
                    estado: 'Recibido',
                    asunto: 'Dolor musculoesquelético',
                    medicamento: 'Piroxicam',
                    cantidad: 10,
                    presentacion: 'Cápsulas de 20 mg',
                    observacion:
                        'Uso ante contractura muscular cervical por mala postura.',
                    AfiliadoId: 5,
                    PrestadorId: null,
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
        await queryInterface.bulkDelete('Receta', null, {});
    },
};
