// models/Store.js
import { Sequelize, DataTypes } from 'sequelize';

const dbConfig = new Sequelize('StoreManagementSystem', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// const sequelize = new Sequelize(
//   dbConfig.database,
//   dbConfig.username,
//   dbConfig.password,
//   {
//     host: dbConfig.host,
//     dialect: 'postgres', // Use the appropriate dialect for your database (e.g., 'mysql', 'sqlite', etc.)
//     // Other Sequelize options (if needed)
//   }
// );

const Store = dbConfig.define('Store', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, 
  },
  ownerId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

Store.sync();

export default Store;
