const env = process.env.NODE_ENV || 'development';

if(env === 'test') return module.exports = require('./config.test');
else if ( env === 'development') return module.exports = require('./config.development');

throw new Error('Not supported NODE_ENV');