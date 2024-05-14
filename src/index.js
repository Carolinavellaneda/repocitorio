const express = require ('express');
const conectarBD = require('../config/db');
const cors = require ('cors');

//Connfiguracion express y puerto
// empezamos la conexion de la bd


const app = express();
const port = process.env.PORT || 5000;


conectarBD();
app.use(cors());
app.use(express.json());

// aca van las rutas de los modulos
app.use('/api/clientes', require('../routes/RoutesClientes'));
app.use('/api/mascotas', require('../routes/RoutesMascotas'));


// se configura el puerto 
app.listen(port, () => console.log(' servidor conectado http://localhost:5000'))
app.get('/', (req,res) =>{

    res.send("Bienvenido nuestro servidor esta configurao");

});