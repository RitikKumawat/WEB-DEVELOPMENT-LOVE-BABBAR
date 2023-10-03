const express = require('express');
const app = express();

//load config from env file
require("dotenv").config();

const PORT = process.env.PORT || 4000;   //if the port does not fetch from env then use port 4000

//middleware to parse json request body
app.use(express.json());

//importing routes for TODO API 

const todoRoutes = require("./routes/Todos");

//mount the todo API routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT} port`);
})

//connecting to DataBase
const dbConnect = require('./config/database');
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1>This is HOMEPAGE baba</h1>`);
})


