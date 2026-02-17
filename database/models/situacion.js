'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class Situacion extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Situacion.belongsTo(models.Afiliado);
        }
    }
    Situacion.init(
        {
            descripcion: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            fechaInicio: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            fechaFin: {
                type: DataTypes.DATE,
                allowNull: true,
            },
        },
        {
            sequelize,
            modelName: 'Situacion',
            tableName: 'Situaciones',
            timestamps: false,
        }
    );
    return Situacion;
};
