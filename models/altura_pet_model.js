import { Sequelize } from 'sequelize';
import database from '../config/connection.js';

const {DataTypes} = Sequelize


const Altura = database.define(
  'altura_pet',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    tipo_altura: {
      type: Sequelize.STRING(50)
    },
    codigo_pet: {
      type: DataTypes.INTEGER
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Altura;
