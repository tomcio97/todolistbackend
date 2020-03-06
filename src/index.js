const mongoose = require('mongoose');
const expressService = require('./services/express')
const routing = require('./api');
const mongoService = require('./services/mongoose')
const config = require('./config.development')

expressService(routing, config.http);
mongoService(config.mongoDB);

const app = expressService(routing, config.http);
const db = mongoService(config.mongoDB);

module.exports = {
    app,
    db
}








