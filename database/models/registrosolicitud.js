'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class RegistroSolicitud extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            RegistroSolicitud.belongsTo(models.Prestador);
        }
    }
    RegistroSolicitud.init(
        {
            tipo: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            estado: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            fecha: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'RegistroSolicitud',
            timestamps: false,
        }
    );
    return RegistroSolicitud;
};
