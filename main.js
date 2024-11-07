const express = require('express')
const app = express()
const port = 4000
const ejs = require('ejs')
const colors = require ('colors')

//ejs

app.set('view engine','ejs');
app.use (express.json());
app.use(express.urlencoded({ extended: false }));

//rutas

app.get('/', function (req,res){
    res.render('login')
})
app.get('/bien',function (req,res){
    res.render('bien')
})
app.get('/datos',function(req,res){
    res.render('datos')
})
//servidor
app.listen(port)
console.log(`server en puerto ${port}`.bgWhite)