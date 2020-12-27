const express = require('express')
const { update } = require('../models/user_model')
const Users = require('../models/user_model')
const router = express.Router()

router.get('/new',(req,res)=>{
    res.render('crud/create')
})

router.post('/new',(req,res)=>{
    const user = new Users(req.body)
    try{
        const newUser = user.save()
        res.redirect('/')
    }catch(e){
        res.send({message:e.message})
    }
})

router.get('/edit/:id',async (req,res)=>{
    try{
        const user = await Users.findById(req.params.id)
        res.render('crud/edit',{user:user})
    }catch(e){
        res.send({message:e.message})
    }
})

router.post('/edit', async(req,res)=>{
    console.log(req.body)
    try{
        const updatedUser = await Users.findByIdAndUpdate({_id:req.body.id},{$set:req.body})
        console.log(updatedUser)
        res.redirect('/')
    }catch(e){
        res.send({message:e.message})
    }
})

router.get("/delete/:id",async(req,res)=>{
    try{
        const deleteUser = await Users.findByIdAndDelete(req.params.id)
        res.redirect('/')
    }catch(e){
        res.send({message:e.message})
    }
})

module.exports = router



