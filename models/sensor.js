'use strict';

var shortid = require('shortid');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sensorSchema = new Schema({
  _id: {
    type: String,
    'default': shortid.generate
  },
  userId: String,
  projectKey: { creatorId: String, projectName: String },
  name: String,
  description: String,
  coords: { lng: String, lat: String },
  address: String,
  createDate: { type: Date, default: Date.now },
  latestUpdate: String,
  pm25Index: Number
});

var Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;
