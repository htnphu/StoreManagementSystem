import express from 'express';
import { Sequelize } from 'sequelize';
const app = express();

const dbConfig = new Sequelize('StoreManagementSystem', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const connect = async () => {
  try {
    await dbConfig.authenticate();
    console.log('Connected to database.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Middleware and routes setup

// Handle status

// Run app
app.listen(8080, async () => {
  await connect();
  console.log('Connected to backend.');
});
