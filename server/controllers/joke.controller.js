//import the model

const { model } = require("mongoose");
const Joke = require("../models/joke.model");

//make ALL CRUD

// read all
module.exports.findAllJokes = (req, res) =>{
    //use model to execute query
    Joke.find()
    .then(allJokes=>{
        res.json(allJokes)//[]
    })
    .catch(err=>{console.log("couldnt retrieve",err)})
}

module.exports.createJoke = (req,res)=>{
    Joke.create(req.body)
    .then(newJoke=>res.json({joke:newJoke}))
    .catch(err=>res.json({message:"something went wrong",error:err}))
}

module.exports.findOneJoke = (req,res)=>{
    Joke.findById({ _id: req.params.id })
    .then(oneSingleJoke => res.json({ user: oneSingleJoke }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateExistingJoke = (req,res)=>{
    Joke.updateOne({ _id: req.params.id }, req.body,{ new: true, runValidators: true })
    .then(updatedJoke=>res.json({joke:updatedJoke}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteJokeById = (req,res)=>{
    Joke.deleteOne({ _id: req.params.id })
    .then(result=>res.json({result:result}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}