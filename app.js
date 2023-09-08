import express from 'express';
import { Sequelize } from 'sequelize';
import bodyParser from 'body-parser';

// Route
import ownerRoute from './api/routes/ownerRoute.js';
import storeRoute from './api/routes/storeRoute.js';

// Database config
import dbConfig from './db.config.js';

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

const app = express();

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to database.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

app.use(bodyParser.json());

// Middleware and routes setup

// Owner routes
app.use('/api/owners', ownerRoute);

// Store routes
app.use('/api/stores', storeRoute);


// Handle status

// Run app
app.listen(8080, async () => {
  await connect();
  console.log('Connected to backend.');
});
