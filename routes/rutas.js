import express from 'express'

//Importo el controlador de Habitaciones
import {ControladorHabitacion} from '../Controllers/ControladorHabitacion.js'

//Importo el controlador de Reservas
import {ControladorReserva} from '../Controllers/ControladorReserva.js'

//Creo un objeto de la clase ControladorHabitacion
let controladorHabitacion=new ControladorHabitacion()

//Creo un objeto de la clase ControladorReserva
let controladorReserva=new ControladorReserva()


//UTILIZO el metodo Router() de express
export let rutas=express.Router()

//LISTA DE SERVICIOS QUE OFRECE EL API
//RUTAS HABITACIONES
rutas.get('/api/v1/habitacion', controladorHabitacion.buscarTodas)
rutas.get('/api/v1/habitacion/:id', controladorHabitacion.buscarPorId)
rutas.post('/api/v1/habitacion', controladorHabitacion.registrar)
rutas.put('/api/v1/habitacion/:id', controladorHabitacion.editar)
rutas.delete('/api/v1/habitacion/:id', controladorHabitacion.elimnar)

//RUTAS RESERVAS
rutas.get('/api/v1/reserva', controladorReserva.buscarTodas)
rutas.get('/api/v1/reserva:id', controladorReserva.buscarPorId)
rutas.post('/api/v1/reserva', controladorReserva.registrar)
rutas.put('/api/v1/reserva:id', controladorReserva.editar)
rutas.delete('/api/v1/reserva:id', controladorReserva.eliminar)




