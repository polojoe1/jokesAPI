//import mongoose to build

const mongoose = require("mongoose");

//the schema - rules that entries in DB must follow

const JokesSchema = new mongoose.Schema({
    setUp: {type:String,required:[true,"Set up required"],minlength:[10,"set up must be atleast 10 chars"]},
    punchLine: {type:String,required:[true,"Punch line required"],minlength:[3,"Punch line must be atleast 10 chars"]},
}, {timestamps:true})

//the model - this is what we use to make the actual query to the DB!

const Joke = mongoose.model("Joke",JokesSchema);

//export the model
module.exports=Joke;