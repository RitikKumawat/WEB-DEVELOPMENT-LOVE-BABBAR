
//Server Instantiate
const express = require('express');
const app = express();

//use to parse req.body in express -> PUT or POST
const bodyParser = require('body-parser');
//specifically parse JSON data and add it to the request Body object
app.use(bodyParser.json());

//Activate the server on 3000 port
app.listen(4000, ()=>{
    console.log("Server started at port no.4000");
})


//Routes GET request
app.get('/',(req,res)=>{
    res.send("hello Jee, kaise ho saare");
})

// POST Request
app.post('/api/cars',(req,res)=>{
    const {name,brand} =  req.body;
    console.log(name);
    console.log(brand);
    res.send("Car submitted successfully.")
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("connection successful")})
.catch((error) => {console.log("Received an error")})



