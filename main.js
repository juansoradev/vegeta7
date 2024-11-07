const express = require('express')
const app = express()
const port = 4000
const ejs = require('ejs')
const colors = require ('colors')
const mysql =require ('mysql2')

//configuracion de la base de datos

var conexioncita =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'juan',
    database: 'git',

});
conexioncita.connect(error => {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1);
    }
    console.log('Conectado a la base de datos'.green);
});


//ejs

app.set('view engine','ejs');
app.use (express.json());
app.use(express.urlencoded({ extended: false }));

//rutas

app.get('/', function (req,res){
    res.render('login')
})
app.get('/bien',function (req,res){
    res.render('bien',)
})
app.get('/datos',function(req,res){
    res.render('datos',{datosUsuario, fecha})
})

let datosUsuario
let fecha

app.post('/', function (req, res) {
    const datos = req.body;
    console.log(datos);


let nombre = datos.nombre;
let cedula = datos.contraseña;
    let validar = `SELECT * FROM usuarios WHERE nombre1 = '${nombre}' AND identificacion = '${cedula}'`;

    conexioncita.query(validar, function (error, results, fields) {
        if (error) {
            console.error('Error al validar usuario:', error);
            res.status(500).send('Error al iniciar sesión');
            return;
        }
        if (results.length === 1) {
            console.log("Bienvenido".blue);
            datosUsuario = results[0];
            res.render('bien', { usuario: datosUsuario });
        } else {
            console.log("Contraseña incorrecta".red);
            res.redirect("/");
        }
    });
});


console.log(datosUsuario)
//servidor
app.listen(port)
console.log(`server en puerto ${port}`.bgWhite)