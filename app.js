require('dotenv').config();

const express = require('express');
const buyerRouter = require('./routes/buyer');
const agentimmovableRouter = require('./routes/agentimmovable');
const keywordRouter = require('./routes/keyword');
const featureRouter = require('./routes/feature');
const goodimmovableRouter = require('./routes/goodimmovable');
const salestatusRouter = require('./routes/salestatus');
const adRouter = require('./routes/ad');

const app = express();
const port = 3000;

app.use(express.json());


app.use('/acheteurs', buyerRouter);
app.use('/agentimmobiliers', agentimmovableRouter);
app.use('/motcles', keywordRouter);
app.use('/caracteristiques', featureRouter);
app.use('/biens', goodimmovableRouter);
app.use('/statusventes', salestatusRouter);
app.use('/annonces', adRouter);




app.listen( port, ()=>{
  console.log('Server running');
})

module.exports = app;