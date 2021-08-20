require('dotenv').config();

const express = require('express');
const app = express();

const routers = require('./routers');


app.use(express.json());
app.use(routers);

app.listen(3000 || process.env.PORT, () => {
  console.log('🚀 Started server on port 3000');
});

module.exports = app;