const express = require('express')
const path = require('path')
const indexRouter = require('indexRouter')
const bodyParser = require('body-parser')

const app = express()
const port = 8080
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Static files folder
// app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

app.listen(port, () => console.log(`Ejecutando http://localhost:${port}`))


function cargarContactos(){
    let url = 'http://www.raydelto.org/agenda.php'
            fetch(url)
            .then(response => response.json())
                .then(data => mostrarData(data))
                .catch(error => console.log(error))
			
            const mostrarData = (data) => {
                console.log(data)
                let body = ''
                for (let i = 0; i<data.length; i++){
                    body += `<tr><td>${data[i].telefono}</td><td>${data[i].nombre}</td><td>${data[i].apellido}</td></tr>`                
                }
                 document.getElementById('data').innerHTML = body
                }            
            }
function guardarContactos(){
    let url = 'http://www.raydelto.org/agenda.php'
    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'szszfadsdas':'asdasdas' 
        },
        body: JSON.stringify({
           nombre: txtnombre,
           apellido: txtapellido,
           telefono: txttelefono
        })
    })

}