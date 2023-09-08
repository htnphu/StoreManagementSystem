// models/Owner.js
import { Sequelize, DataTypes } from 'sequelize';
// Database config
import dbConfig from '../../db.config.js';

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: 'postgres', 
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const Owner = sequelize.define('Owner', {
  fullName: {
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
  dateOfBirth: DataTypes.DATE,
  avatar: DataTypes.STRING,
  gender: DataTypes.STRING,
  uniqueId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

Owner.sync();

export default Owner;
