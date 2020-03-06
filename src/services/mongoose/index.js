const mongoose = require('mongoose');

const createDatabase = ({host, options}) =>
{
    for(const[key, value] of Object.entries(options))
    {
        mongoose.set(key, value);
    }
    mongoose.connect(host);
    mongoose.connection.on('connected', () => console.log("Polaczony z baza!"));

    return mongoose;
};


module.exports = createDatabase;