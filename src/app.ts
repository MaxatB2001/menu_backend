import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from './ormconfig';
import 'reflect-metadata';
import { menuRouter } from './routes/menu.routes';
import { categoryRouter } from './routes/category.routes';


dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", menuRouter)
app.use("/api/category", categoryRouter)

const startServer = async () => {  
  try {
    await AppDataSource.initialize(); // Initialize DataSource
    console.log('Connected to the database');

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
};

startServer();
