const express  = require('express');
const app = express();

require('dotenv').config();

const PORT =  process.env.PORT || 3000;


app.use(express.json());

const blogRoutes = require('./routes/blogRoute');

// //mount
app.use("/api/v1",blogRoutes);

const dbConnect=  require('./config/databse');
dbConnect();

//start the server 
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send(`<h1>This is Blog Home Page</h1>`);
})

