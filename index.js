import express from "express";
import csurf from "csurf";
import cookieParser from "cookie-parser";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { PORT } from "./src/config.js";
import db from "./src/config/db.js";
import myConnection from "express-myconnection";
import mysql from "mysql2";
import Swal from 'sweetalert2'
// import mariadb from "mariadb";
import { default as customerRoutes } from "./src/routes/userRoutes.js";

import multer from "multer";
import mimeTypes from "mime-types";
import fetch from 'node-fetch'

import urlencoded from "body-parser";
import nodeMailer from 'nodemailer';
import path from "path";


const app = express();

app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


//Habilitar cookie parser

app.use( cookieParser() )

//Habilitar CSRF

app.use( csurf({cookie: true}))

//conexion a la base de datos
try {
  await db.authenticate()
  db.sync()
  console.log('Conexion Correcta a la base de datos');

}
catch (error) {
  console.log(error);
}


export const transporter = nodeMailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "mantenimiento@qualitybolca.net",
    pass: "Man.2024Nto",
  }
});


export function alerta( tipoA, mensaje) {
  console.log('Entro a la alerta');
  
  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
  });
}

app.use(express.static('./src/public'));

// const conecta = mariadb.createPool({
//   host:'86.38.218.253',
//   user:'mysql',
//   password:'8646559a',
//   port:'3308',
//   database:'express'
// })
//definir base de datos
// app.use(myConnection(mysql, {
//   host: '86.38.218.253',
//   user: 'mariadb',
//   password: '8646559a',
//   port: '3308',
//   database: 'express'
// }, 'single'));

// app.use(myConnection(conecta))

//Habilirar  EJS
app.set('views', path.join('\src', 'views'));
app.set('view engine', 'ejs');




const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    cb("", 'curriculum' + '.' + mimeTypes.extension(file.mimetype));
  }
})

const upload = multer({
  storage: storage
})


//Routing
// app.get('/', customerRoutes);
// app.get('/registro', customerRoutes);
// app.get('/olvide-password', customerRoutes);
// app.get('/directorio', customerRoutes);
// app.get('/mantenimiento', customerRoutes);
// app.get('/solicitud', customerRoutes);
// app.post('/enviar', customerRoutes);
// app.post('/enviarCorreo', customerRoutes);
// app.post('/uploader', upload.single('avatar'), (req, res)=>{});
app.use('/', customerRoutes);

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
