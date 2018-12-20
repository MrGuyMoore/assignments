const express = require('express');
const {Router} = express;
const multer = require('multer');
const Movie = require('../models/movie');
const movieRouter = Router();
const path = require("path")

const upload = multer({
    dest: './tmp',
    limits: {fileSize: 1000000}
})

movieRouter.route('/')
    .get((req,res,next) =>{
        Movie.find({},req.query, (err, foundMovie) =>{
            if(err){
                res.status(400)
                next(err)
            }
            else res.status(200).send(foundMovie)
        })
    })
    .post(upload.single("file"), (req, res, next) =>{
        req.body.filename = req.file.filename;
        const newMovie = new Movie(req.body);
        newMovie.save((err, savedMovie) =>{
            if(err){
                res.status(400)
                next(err)
            }
            else res.status(201).send(savedMovie)
        })
    })
movieRouter.route('/:id')
    .get((req, res, next) =>{
        Movie.findById(req.params.id, (err, foundMovie) =>{
            if(err){
                res.status(400)
                next(err)
            }else{
                res.status(200).send(foundMovie)
            }
        })
    })
    .delete((req,res) =>{
        Movie.findByIdAndDelete(req.params.id, (err, deleteMovie) =>{
            if(err){
                res.status(400)
                next(err)
            }else{
                res.status(204).send(deleteMovie)
            }
        })
    })
    .put((req, res) => {
        Movie.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, editedMovie) =>{
            if(err){
                res.status(400)
                next(err)
            }else{
                res.status(200).send(editedMovie)
            }
        })
    })
movieRouter.route("/img/:filename")
    .get((req, res, next) => {
        res.sendFile(path.resolve(__dirname, `../tmp/${req.params.filename}`))
    })

module.exports = movieRouter;