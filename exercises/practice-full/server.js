const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());


// Setting up routes that handle request

app.use("/engines", require("./routes/engines"))

app.use((err,req,res,next) =>{
    res.send({error: err.message})
})

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true},()=> console.log('Connected to MongoDB'))
app.listen(process.env.PORT, ()=> console.log(`Server listening on port ${process.env.PORT}`))