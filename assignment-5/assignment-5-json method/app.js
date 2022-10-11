const express = require('express');

const routes = require('./Routes/index.js');

const port = 8080;
const hostname = 'localhost';

const app = express();
app.use('/',routes);

app.listen(port, hostname, ()=> {
    console.log(`Server is running at ${hostname}:${port}`);
});

