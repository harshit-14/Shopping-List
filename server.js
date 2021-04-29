const express = require('express');
const mongoose =  require("mongoose");
const bodyParser = require("body-parser");

const cors  = require('cors')
const path =require('path');
const app =  express();

app.use(bodyParser.json());
app.use(cors());
const db = require('./config/keys').mongoURI;

//connect to mongo
//{ useUnifiedTopology: true } to the MongoClient constructor.

mongoose.connect(db,{useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true
   })
.then(()=> console.log("mongodb connect"))
.catch(err => console.log(err));


//use routes
 
app.use('/api/items', require('./routes/api/items'));
//app.use('/api/users', require('./routes/api/users'));

const port = process.env.PORT || 5000;

if(process.env.NODE_ENV=== 'production'){
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
     res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    });
}

app.listen(port,()=> console.log("server started"))