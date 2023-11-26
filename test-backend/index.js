const express = require('express')
const mongoose = require('mongoose')
const cors =require('cors')
const {UserModel,AuthModel} = require('./models/Users')


const app =express()
app.use(cors()) // to bind frontend to server
app.use(express.json()) // To pass the data form front end to server in .json format


mongoose.connect("mongodb://127.0.0.1:27017/crud",
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true
});  //to connect to mongo database

//Display records on Frontend 
app.post('/register',(req,res)=>{
    AuthModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
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

app.get('/',(req,res)=>{
    UserModel.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.get('/getUser/:id',(req,res)=>{
    const id =req.params.id;
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.get('/getUserByName/:name', (req, res) => {
    const name = req.params.name;
    UserModel.findOne({ name: name })
      .then(user => res.json(user))
      .catch(err => res.json(err));
  });

app.put('/updateUser/:id', (req,res) => {
    const id =req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{
        name: req.body.name, 
        email: req.body.email, 
        age: req.body.age
    })
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.delete('/deleteUser/:id', (req,res) => {
    const id =req.params.id;
    UserModel.findByIdAndDelete({_id:id})
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