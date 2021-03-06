'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UsersSchema = new Schema({
    userName: { type: String },
    password: { type: String },
  });

  return mongoose.model('Users', UsersSchema);
};
