import path from 'node:path';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { apiRoutes } from './apiRoutes';
import { zodErrorMiddleware } from './middleware/zodError.middleware';

const app: express.Application = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'));
app.use(zodErrorMiddleware);

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', apiRoutes);

export default app;
