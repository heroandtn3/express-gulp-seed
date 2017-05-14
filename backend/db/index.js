const mongoose = require('mongoose');
const pubsub = require('../pubsub');
const models = require('./models');

mongoose.Promise = require('q').Promise;

function init() {
  mongoose.connect('mongodb://localhost/doctruyen');

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    pubsub.publish('mongodb:connected');
  });
}

module.exports = {
  init,
  models,
};
