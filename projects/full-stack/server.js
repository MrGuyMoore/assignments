const express = require ('express');
const mongoose = require('mongoose')
const path = require('path')

require('dotenv').config();


const app = express();



app.use(express.json());
app.use(express.static(path.join(__dirname,"client","build")))


app.use('/api/movie', require('./routes/movie'));
app.use('/api/tvshow', require('./routes/tvshow'));

app.use((err, req, res, next) => {
    res.send({error: err.message})
});
app.get("*",(req, res) =>{
    res.sendFile(path.join(__dir,"client","build","index.html"))
})

mongoose.connect(process.env.MONGODB_URI, ()=> console.log("Connected to MongoDB"));
app.listen(process.env.PORT, ()=> console.log(`Server listening on port ${process.env.PORT}`));
