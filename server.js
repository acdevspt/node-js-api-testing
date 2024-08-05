const app = require('./app');
const db = require('./config/db');

const port = process.env.PORT || 3000;

db.connect()
  .then(() => {
    console.log('Database connected...');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
