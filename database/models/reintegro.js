'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class Reintegro extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Reintegro.belongsTo(models.Afiliado);
            Reintegro.belongsTo(models.Prestador); //el que maneja la solicitud
            //relacion con prestador que atendio el turno
        }
    }
    Reintegro.init(
        {
            fecha: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            estado: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            motivoEstado: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            asunto: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            especialidad: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lugar: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            fechaFactura: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            cuitFacturado: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            valorFacturado: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            personaFacturada: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            formaDePago: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            cbu: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            observacion: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Reintegro',
            timestamps: false,
            defaultScope: {
                include: [
                    {
                        association: 'Afiliado',
                        attributes: ['id', 'nombre', 'apellido'],
                    },
                ],
            },
        }
    );
    return Reintegro;
};
