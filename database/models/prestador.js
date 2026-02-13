'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class Prestador extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Prestador.hasMany(models.Receta);
            Prestador.hasMany(models.Reintegro);
            Prestador.hasMany(models.Autorizacion);
            Prestador.hasMany(models.Turno);
            Prestador.hasMany(models.Nota);
            Prestador.hasMany(models.RegistroSolicitud);
            Prestador.hasMany(Prestador, {
                as: 'medicos',
                foreignKey: 'centroId',
            });
            Prestador.belongsTo(Prestador, {
                as: 'centro',
                foreignKey: 'centroId',
            });
        }
    }
    Prestador.init(
        {
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            esCentro: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            contraseña: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Prestador',
            timestamps: false,
            defaultScope: {
                attributes: {
                    exclude: ['contraseña'],
                },
            },
        }
    );
    return Prestador;
};
