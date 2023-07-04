import { Sequelize } from 'sequelize';
import database from '../config/connection.js';

const {DataTypes} = Sequelize

const Pet = database.define(
  'pet',
  {
    codigo_pet: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nome_pet: {
      type: Sequelize.STRING(50)
    },
    genero_pet: {
      type: Sequelize.STRING(50)
    },
    cpf: {
      type: Sequelize.STRING(11)
    },
    altura: {
      type: DataTypes.FLOAT
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Pet;
