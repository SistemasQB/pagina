import 'dotenv/config'
import express from "express";
import {default as customerController} from './../controllers/customerController.js';


const router = express.Router();

router.get('/', customerController.formularioLogin);
router.get('/login', customerController.formularioLogin);
router.post('/login', customerController.autenticar);
router.get('/registro', customerController.formularioRegistro);
router.post('/registro', customerController.registrar);
router.get('/confirmar/:token', customerController.confirmar)
router.get('/requisicion', customerController.requisicion);
router.post('/requisicion', customerController.requisicion2);
router.get('/olvide-password', customerController.formularioOlvidePassword);
router.post('/olvide-password', customerController.resetPassword)
router.get('/olvide-password/:token', customerController.comprobarToken)
router.post('/olvide-password/:token', customerController.nuevoPassword)
router.get('/inicio', customerController.inicio)
router.get('/controlDispositivos', customerController.controlDispositivos)
router.post('/controlDispositivos', customerController.controlDispositivos2)
router.get('/directorio', customerController.paginaDirectorio);
router.get('/mantenimiento', customerController.paginaMantenimiento);
router.get('/solicitud', customerController.paginaSolicitud);
router.post('/enviar', customerController.paginaSolicitud2);
router.post('/uploader', customerController.uploads);
router.post('/enviarCorreo', customerController.enviarCorreo);


export default router;