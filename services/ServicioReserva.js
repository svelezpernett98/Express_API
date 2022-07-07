//importo el modelo de datos
import {modeloReserva} from '../models/modeloReserva.js'

export class ServicioReserva{

    constructor(){}

    async registrar(reserva, precio){
        //let reservacion=new modeloReserva(reserva)
        //return await reservacion.save()

        let reservacion=new modeloReserva(reserva)
        reservacion.precio_reserva=precio
        return await reservacion.save()
    }

    async buscarTodas(){
        let reservas=await modeloReserva.find()
        return reservas
    }

    async buscarPorId(id){
        let reserva=await modeloReserva.findById(id)
        return reserva
    }

    async editar(id,datos){
        return await modeloReserva.findByIdAndUpdate(id,datos)
    }

    async eliminar(id){
        return await modeloReserva.findByIdAndDelete(id)
    }
}