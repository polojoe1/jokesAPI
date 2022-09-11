const express = require("express");
const app = express();
const PORT = 8000;

const DB = "jokes";

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//connected to DB using mongoose!
require("./config/mongoose.config")(DB)
//routes import after DB connection

require("./routes/joke.route")(app)



//STarts sErVeR!
app.listen(PORT,()=>{console.log(`server on ${PORT}`)});