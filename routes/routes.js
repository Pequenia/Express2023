// Load MySQL pool connection
const pool = require('../data/config');

// App routes
const routes = (app) => {
  // Welcome message
  app.get('/', (req, res) => {
    res.send({
      message: 'Welcome to Node.js Express REST API!',
    });
  });

  // Get all users
  app.get('/users', (req, res) => {
    // Get all users from MySQL
    pool.query('SELECT * FROM users', (err, rows) => {
      if (err) throw err;

      res.send(rows);
    });
  });
};

module.exports = routes;
