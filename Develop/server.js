const express = require('express');
const routes = require('./routes');
const { sequelize } = require('./models'); // Import your Sequelize instance

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Synchronize Sequelize models to the database
sequelize.sync()
  .then(() => {
    // Start the server to listen on the specified port
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  })
  .catch((error) => {
    console.error('Error synchronizing models:', error);
  });


