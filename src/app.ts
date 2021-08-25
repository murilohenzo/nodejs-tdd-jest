require('dotenv').config();

import express from 'express';
const app = express();

const routers = require('./routers');


app.use(express.json());
app.use(routers);

export default app;