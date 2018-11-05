const express = require ('express');
const mongoose = require('mongoose')

require('dotenv').config();


const app = express();



app.use(express.json());



app.use('/api/movie', require('./routes/movie'));
app.use('/api/tvshow', require('./routes/tvshow'));

app.use((err, req, res, next) => {
    res.send({error: err.message})
});

mongoose.connect(process.env.MONGODB_URI, ()=> console.log("Connected to MongoDB"));
app.listen(process.env.PORT, ()=> console.log(`Server listening on port ${process.env.PORT}`));
