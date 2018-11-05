const express = require('express');
const {Router} = express;

const Engine = require("../models/engines")
const engineRouter = Router();

engineRouter.route("/", )
    .get((req,res,next)=>{
        Engine.find({}, (err, foundEngine) => {
            if (err){
                res.status(400)
                next(err)
            }
            else res.status(200).send(foundEngine)
        })
    })
    .post((req,res,next) =>{
        const newEngine = new Engine(req.body);
        newEngine.save((err, savedEngine) =>{
            if(err){
                res.status(400)
            }
            else res.status(201).send(savedEngine);
        })
    })
engineRouter.route("/:id")
    .get((req, res) =>{
        Engine.findById(req.params.id, (err, foundEngine) =>{
            if(err){
                res.status(400)
                next(err)
            }else{
                res.status(200).send(foundEngine)
            }

        })
    })
    .delete((req, res) => {
        Engine.findByIdAndDelete(req.params.id, (err, deleteEngine) =>{
            if (err){
                res.status(400);
                next(err)
            }else{
                res.status(204).send(deleteEngine)
            }
        })
    })
    .put((req, res) => {
        Engine.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, editedEngine) =>{
            if(err){
                res.status(400)
                next(err)
            }else {
                res.status(200).send(editedEngine)
            }
        })
    })



module.exports = engineRouter;