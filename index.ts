// app.js
import express from 'express';
import { connect, ConnectOptions } from 'mongoose';
import { json } from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

import routes from './src/routes';

const app = express();
const port = 3000;

const mongooseURI = process.env.MONGO_DB || '';

// Middleware
cors();
app.use(json());
app.use('/', routes);

// MongoDB connection
connect(
    mongooseURI as string,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as ConnectOptions
)
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => console.log(err));

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
