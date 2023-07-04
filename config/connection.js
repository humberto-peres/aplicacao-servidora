import { Sequelize } from 'sequelize';

// Conexão com o Banco de Dados
const db = new Sequelize('tutoria', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default db;
