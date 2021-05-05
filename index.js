const { response } = require('express');
const express = require('express');
const fast2sms = require('fast-two-sms');
const app = express();

const port = process.env.PORT || 3000;

require('dotenv').config();

app.set('view engine','ejs');

app.use(express.urlencoded({extended: false}));

app.get('/',(req,res)=>{
    res.render("home.ejs");
})

app.post('/sendMessage',async(req,res)=>{
    const response = await fast2sms.sendMessage({message: req.body.message, numbers: [req.body.number], authorization: process.env.API_KEY});
    res.send(response.message);
})

app.listen(port, ()=> {
    console.log("server is listening");
})