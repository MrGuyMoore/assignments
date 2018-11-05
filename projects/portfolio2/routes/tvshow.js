const express = require ('express');
const {Router} = express;
const multer = require('multer')
const TVShow = require('../models/tvshow');
const tvshowRouter = Router();
const path = require("path")

const upload = multer({
    dest: './tmp',
    limits: {fileSize: 1000000}
})

tvshowRouter.route('/')
    .get((req,res,next) =>{
        TVShow.find({}, req.query, (err, foundTVShow) =>{
            if(err){
                res.status(400)
                next(err)
            }
            else res.status(200).send(foundTVShow)
        })
    })
    .post(upload.single('file'),(req,res,next) =>{
        req.body.filename = req.file.filename;
        const newTVShow = new TVShow(req.body);
        newTVShow.save((err, savedTVShow) =>{
            if(err){
                res.status(400)
                next(err)
            }
            else res.status(201).send(savedTVShow)
        })
    })
tvshowRouter.route('/:id')
    .get((req,res) =>{
        TVShow.findById(req.params.id, (err,foundTVShow) =>{
            if(err){
                res.status(400)
                next(err)
            }else{
                res.status(200).send(foundTVShow)
            }
        })
    })
    .delete((req,res) =>{
        TVShow.findByIdAndDelete(req.params.id,(err, deleteTVShow) =>{
            if(err){
                res.status(400)
                next(err)
            }else{
                res.status(204).send(deleteTVShow)
            }
        })
    })
    .put((req,res) =>{
        TVShow.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, editedTVShow) =>{
            if(err){
                res.status(400)
                next(err)
            }else{
                res.status(200).send(editedTVShow)
            }
        })
    })
tvshowRouter.route("/img/:filename")
    .get((req, res, next) => {
        res.sendFile(path.resolve(__dirname, `../tmp/${req.params.filename}`))
    })
module.exports = tvshowRouter;