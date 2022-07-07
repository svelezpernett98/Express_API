import {ServicioReserva} from "../services/ServicioReserva.js"

export class NegocioReserva{

    constructor(){}

    async calcularPrecio(datos){

        //let diferencia= Math.abs(datos.fecha_inicio-datos.fecha_final)
        //let dias = diferencia/(1000 * 3600 * 24)

        let diaInicio = new Date(datos.fecha_inicio)
        let diaFinal = new Date(datos.fecha_final)

        let diferencia= Math.abs(diaFinal-diaInicio)
        let dias = diferencia/(1000 * 3600 * 24)


        if(datos.nombre_habitacion=="habitacion10"){
            datos.precio_reserva=dias*10
        }
        else{
            if(datos.nombre_habitacion=="habitacion20"){
                datos.precio_reserva=dias*20
            }
            else{
                datos.precio_reserva=0
            }
        }

        let servicioReserva=new ServicioReserva()
        await servicioReserva.registrar(datos, datos.precio_reserva)
    }

}