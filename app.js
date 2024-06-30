const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/index'));
app.use('/employee', require('./routes/employee'));
app.use('/asset', require('./routes/asset'));
app.use('/assetCategory', require('./routes/assetCategory'));
app.use('/assetHistory', require('./routes/assetHistory'));

// Sync database and start server
db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
