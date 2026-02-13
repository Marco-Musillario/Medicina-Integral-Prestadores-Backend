'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class Nota extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Nota.belongsTo(models.Afiliado);
            Nota.belongsTo(models.Turno);
            Nota.belongsTo(models.Prestador);
        }
    }
    Nota.init(
        {
            descripcion: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            motivo: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            doctor: {
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
            modelName: 'Nota',
            timestamps: false,
        }
    );
    return Nota;
};
