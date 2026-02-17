'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class Turno extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Turno.hasOne(models.Nota);
            Turno.belongsTo(models.Afiliado);
            Turno.belongsTo(models.Prestador);
        }
    }
    Turno.init(
        {
            fecha: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            descripcion: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            especialidad: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            estado: {
                type: DataTypes.STRING,
                defaultValue: 'Pendiente',
            },
        },
        {
            sequelize,
            modelName: 'Turno',
            tableName: 'Turnos',
            timestamps: false,
        }
    );
    return Turno;
};
