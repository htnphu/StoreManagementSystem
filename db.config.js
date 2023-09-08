// db.config.js
const dbConfig = {
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'StoreManagementSystem',
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export default dbConfig;
