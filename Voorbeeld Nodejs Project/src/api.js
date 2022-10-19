const express = require('express');
require('dotenv').config(); //definieren dat we gebruken maken van deze package
const mongoose = require('mongoose');
const serverless = require('serverless-http');

const router = require('./routes');

const app = express();

app.use(express.json());
app.use('/.netlify/functions/api', router);

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports.handler = serverless(app);
