const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser')

const routes = require ('./Routes/index');

const port = 8080;
const hostname = 'localhost';
const dbUrl = 'mongodb://127.0.0.1:27017/zomato';
const atlasDbUrl = 'mongodb+srv://yogi:Jeyasaro21@cluster0.ygwzzaz.mongodb.net/zomato?retryWrites=true&w=majority';

//yogi
//Jeyasaro21

const app = express();

app.use(bodyParser.json())
app.use ('/', routes);

mongoose.connect(atlasDbUrl, {
    useNewUrlParser: true, useUnifiedTopology: true
})

.then( res => {
    app.listen(port, hostname, () => {
        console.log(`Server is running at ${hostname}:${port}`)
    });
})
.catch(err => console.log(err));