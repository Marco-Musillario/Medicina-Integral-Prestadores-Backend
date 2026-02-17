'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class Autorizacion extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Autorizacion.belongsTo(models.Afiliado);
            Autorizacion.belongsTo(models.Prestador);
        }
    }
    Autorizacion.init(
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
            lugar: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            observacion: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            especialidad: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            diasDeInternacion: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Autorizacion',
            tableName: 'Autorizaciones',
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
    return Autorizacion;
};
