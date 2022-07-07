//CONTROLADOR:
//1. Recibir peticiones
//2. Ejecutar logica de negocio
//3. LLamar a la capa de SERVICIOS
//4. Enviar las respuestas al cliente

//Importo els ervicio
import {NegocioReserva} from '../negocio/NegocioReserva.js'
import {ServicioReserva} from '../services/ServicioReserva.js'

export class ControladorReserva{
    
    constructor(){}

    async buscarTodas(request,response){
        
        let servicioReserva=new ServicioReserva()

        try{
            response.status(200).json({
                mensaje:"Exito buscando los datos",
                data:await servicioReserva.buscarTodas(),
                estado:true
            })
        }
        catch(error){
            response.status(400).json({
                mensaje:"Error buscando los datos: "+error,
                data:[],
                estado:false
            })
        }
    }


    async buscarPorId(request,response){

        let servicioReserva=new ServicioReserva()

        let id=request.params.id
        console.log(id)
        try{
            response.status(200).json({
                mensaje:"Exito buscando los datos "+id,
                data:await servicioReserva.buscarPorId(id),
                estado:true
            })
        }

        catch(error){
            response.status(400).json({
                mensaje:"Error buscando los datos: "+error,
                data:[],
                estado:false
            })
        }
    }


    async registrar(request,response){

        //let servicioReserva= new ServicioReserva()
        let negocioReserva=new NegocioReserva()

        let datosPeticion=request.body

        try{

            //await servicioReserva.registrar(datosPeticion)
            await negocioReserva.calcularPrecio(datosPeticion)
            response.status(200).json({
                mensaje:"Exito agregando la Reserva",
                data:null,
                estado:true
            })

        }catch(error){

            response.status(400).json({
                mensaje:"Fallamos agregando la Reserva",
                data:[],
                estado:false
            })

        }


    }

    async editar(request,response){
        let servicioReserva= new ServicioReserva()
        let id=request.params.id
        let datosPeticion=request.body
        try{
            await servicioReserva.editar(id,datosPeticion)
            response.status(200).json({
                mensaje:"Exito editando la Reserva",
                data:null,
                estado:true
            })


        }catch(error){

            response.status(400).json({
                mensaje:"fallamos editando la Reserva "+error,
                data:[],
                estado:false
            })

        }
    }

    async eliminar(request,response){
        let servicioReserva= new ServicioReserva()
        let id=request.params.id
        try{
            await servicioReserva.eliminar(id)
            response.status(200).json({
                mensaje:"Exito eliminando la Reserva",
                data:null,
                estado:true
            })


        }catch(error){

            response.status(400).json({
                mensaje:"fallamos eliminando la Reserva "+error,
                data:[],
                estado:false
            })

        }
    }
}