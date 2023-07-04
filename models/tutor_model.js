import { Sequelize } from 'sequelize';
import database from '../config/connection.js';

const Tutor = database.define(
  'tutor',
  {
    cpf: {
      type: Sequelize.STRING(11),
      primaryKey: true
    },
    nome: {
      type: Sequelize.STRING(50)
    },
    fone: {
      type: Sequelize.STRING(15)
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Tutor;
