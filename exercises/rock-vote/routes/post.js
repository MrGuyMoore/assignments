const express = require('express');
const {Router} = express;

const Post = require('../models/post');
const postRouter = Router();

postRouter.route('/',)
    .get((req,res,next) => {
        Post.find({}, (err, foundPost) =>{
            if(err){
                res.status(400)
                next(err)
            }
            else res.status(200).send(foundPost)
        })
})
    .post((req, res,next) =>{
        const newPost = new Post(req.body);
        newPost.save((err,savedPost) =>{
            if(err){
                res.status(400)
            }
            else res.status(201).send(savedPost)
        })
    })
postRouter.route("/:id")
    .get((req, res) =>{
        Post.findbyId(req.params.id, (err, foundPost) =>{
            if(err){
                res.status(400)
                next(err)
            }else{
                res.status(200).send(foundPost)
            }
        })
    })
    .delete((req,res) => {
        Post.findByIdAndDelete(req.params.id, (err, deletePost) =>{
            if(err){
                res.status(400)
                next(err)
            }else{
                res.status(204).send(deletePost)
            }
        })
    })
    .put((req, res) =>{
        Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, editedPost) =>{
            if(err){
                res.status(400)
                next(err)
            }else{
                res.status(200).send(editedPost)
            }
        })
    })

module.exports = postRouter;