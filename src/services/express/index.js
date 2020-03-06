const express = require('express');

const createServer = (routing, {port, ip}) =>
{
    const app = express();
    app.use(express.json());
    app.use('/api', routing);

    app.listen(port, ip,  () => {console.log("Serwer uruchomiony")});

    return app;
}

module.exports = createServer;