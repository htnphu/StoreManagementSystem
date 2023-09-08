// models/Owner.js
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

const Owner = dbConfig.define('Owner', {
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

// dbConfig.sync()
//   .then(() => {
//     console.log('Table "Owners" created successfully.');
//   })
//   .catch((error) => {
//     console.error('Error in creating table "Owners":', error);
//   });

export default Owner;
