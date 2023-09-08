import express from 'express';
import { Sequelize } from 'sequelize';
import bodyParser from 'body-parser';

// Route
import ownerRoute from './api/routes/ownerRoute.js';

// // Config
// import dbConfig from './db.config.js';

const app = express();

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

const connect = async () => {
  try {
    await dbConfig.authenticate();
    console.log('Connected to database.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

app.use(bodyParser.json());

// Middleware and routes setup
app.use('/api/owners', ownerRoute);

// Handle status

// Run app
app.listen(8080, async () => {
  await connect();
  console.log('Connected to backend.');
});
