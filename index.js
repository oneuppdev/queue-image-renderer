'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const formData = require("express-form-data");
const os = require("os");
const analyzer = require('./routes/analyzer');

const options = {
    uploadDir: os.tmpdir(),
    autoClean: true
  };

const app = express();
const environment = app.get('env');
const Port = environment === 'development' ? 3000 : process.env.PORT;

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(formData.parse(options));
app.use(formData.format());
app.use(formData.stream());
app.use(formData.union());

app.use('/api/analyzer', analyzer);

app.listen(Port, () => {
    console.log(`Listenening on port ${Port}`);
});