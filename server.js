const express = require('express')
const mongoose = require('mongoose')
const Users = require('./models/user_model')
const bodyparser = require('body-parser')
const app = express()

mongoose.connect("mongodb://localhost:27017/crud", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false})

const db = mongoose.connection
db.on('error',(error)=> console.error(error))
db.on('open',()=> console.log("Database connected"))

app.set('view engine','ejs')
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
const Users_detail = require('./routes/router.js')
app.use('/users',Users_detail)


app.get('/',async (req,res)=>{
    const user = await Users.find({})
    res.render('index',{records:user})
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("server is running up")
})