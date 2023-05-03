const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();
const port = 3002;

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
routes(app);

// Start server
const server = app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server listening on port ${server.address().port}`);
});
