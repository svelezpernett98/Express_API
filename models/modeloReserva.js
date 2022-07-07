//Importar mongoose
import mongoose from 'mongoose'

//ESQUMA
const Schema = mongoose.Schema //Esquema de datos (QUE DATOS TIENE MI MODELO)

//Creo mi propio esquema de datos
const Reserva=new Schema({
    nombre_huesped:{
        type:String,
        required:true
    },
    contacto_huesped:{
        type:String,
        required:true
    },
    fecha_inicio:{
        type:Date,
        required:true
    },
    fecha_final:{
        type:Date,
        required:true
    },
    nombre_habitacion:{
        type:String,
        required:true
    },
    cantidad_personas:{
        type:Number,
        required:true
    },
    precio_reserva:{
        type:Number,
        required:false
    }
})

//SE ENVIA EL MODELO DE DATOS
export const modeloReserva=mongoose.model('reservas', Reserva)