const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const storyRoutes = require('./api/story');

const SERVER_PORT = Number(process.env.SERVER_PORT || 3000);

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

// allow CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use('/api/stories', storyRoutes);

function start() {
  app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}!`);
  });
}

module.exports = {
  start,
};
