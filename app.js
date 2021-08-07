const bodyParser = require('body-parser');
const express = require('express');
const app = express({extended: false}); //added extended: false
const mongoose = require('mongoose');
const userRoutes  = require('./routes/user');
const bronze100lCardRoutes  = require('./routes/bronze100lCard');
const bronze100lPinRoutes  = require('./routes/bronze100lPin');
const gold100lCardRoutes  = require('./routes/gold100lCard');
const gold100lPinRoutes  = require('./routes/gold100lPin');
const silver100lCardRoutes  = require('./routes/silver100lCard');
const silver100lPinRoutes  = require('./routes/silver100lPin');
const cors = require('cors');
//const jwtAuth = require('./helper/jwt')


//cors is a middleware that must 
//be initialized before every other thing
//because it make node.js to trust other apps/http

app.use(cors());
app.options('*', cors());

//environment variable
require('dotenv/config')
api = process.env.API_URL


//midleware
app.use(express.json());
app.use(`${api}/user`,userRoutes)
app.use(`${api}/bronze100lCard`,bronze100lCardRoutes)
app.use(`${api}/bronze100lPin`,bronze100lPinRoutes)
app.use(`${api}/gold100lCard`,gold100lCardRoutes)
app.use(`${api}/gold100lpin`,gold100lPinRoutes)
app.use(`${api}/silver100lCard`,silver100lCardRoutes)
app.use(`${api}/silver100lPin`,silver100lPinRoutes)
//app.use(jwtAuth)




mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'futoeclass'

})
.then(()=>console.log('mahadumia dataBase connected, up and running....'))
.catch((err) => console.log(err.message))
let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000;
}

app.listen(port, ()=> 
    console.log('You are listening to port', port),
)
