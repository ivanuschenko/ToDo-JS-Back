const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskScheme = new Schema({
  text: String,
  isCheck: Boolean  
});

module.exports = Task = mongoose.model('Tasks', taskScheme );