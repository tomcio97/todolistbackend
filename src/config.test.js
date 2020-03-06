 module.exports = {
  http: {
      port: '9000',
      ip: '127.0.0.1',
  },
     mongoDB: {
         host: 'mongodb://localhost/mojabaza-testing',
         options:{
             debug: false,
             useNewUrlParser: true,
             useCreateIndex: true,
             useUnifiedTopology: true,
             useFindAndModify: false,

         }
     },

 };