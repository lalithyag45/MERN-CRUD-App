const express = require('express')
const mongoose = require('mongoose')
const cors =require('cors')
const AuthModel= require('./models/Users')


const app =express()
app.use(cors()) // to bind frontend to server
app.use(express.json()) // To pass the data form front end to server in .json format


mongoose.connect("mongodb://127.0.0.1:27017/crud",
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true
});  //to connect to mongo database


//store the details in the database
app.post('/register',(req,res)=>{
    AuthModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
//Get all the users from database
app.get('/',(req,res)=>{
    AuthModel.find({})
    .then(users=>{
        console.log(users)
        res.send(users)
    })
    .catch(err=>{
        console.log(err)
        res.json(err)})
})
//Authenticate the user
app.get('/:name',(req,res)=>{
    const name = req.params.name;
    AuthModel.findOne({name:name})
    .then(user =>{
        if(user){
            res.json(user) 
        }
        else{
            res.json({})
        }
    })
    .catch(err=>res.json(err))
})

//Update the user with particular ID
app.get('/getUser/:id',(req,res)=>{
    const id =req.params.id;
    AuthModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.put('/updateUser/:id', (req,res) => {
    const id =req.params.id;
    AuthModel.findByIdAndUpdate({_id:id},{
        name: req.body.name, 
        email: req.body.email, 
        password: req.body.password
    })
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})


//search the particular user with name
app.get('/getUserByName/:name', (req, res) => {
    const name = req.params.name;
    AuthModel.findOne({ name: name })
      .then(user => res.json(user))
      .catch(err => res.json(err));
  });

// Delete the user from database
app.delete('/deleteUser/:id', (req,res) => {
    const id =req.params.id;
    AuthModel.findByIdAndDelete({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.post("/createUser", (req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(8080,() => {  // to call the server
    console.log("Server is Running")
})