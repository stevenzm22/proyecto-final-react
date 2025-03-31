import React, { useEffect, useState } from 'react'
import "../comprasProductos/Style.css"
import { useNavigate } from 'react-router-dom'
import LlamadosCompras from '../../service/LlamadosCompras';
import Swal from "sweetalert2";


function Compras() {

    const navigate=useNavigate()
    const [compras,setcompras]=useState([])

     useEffect(() => {
       
            async  function recuperarDatos() {
                const datos= await LlamadosCompras.GetCompras()
                
        
                setcompras(datos)
            }
         
            recuperarDatos()
        
          }, []); 

        const [nombre,setNombre]=useState("")
        const [numeroDTarjeta,setnumeroDTarjeta]=useState("")
        const [Mes,setMes]=useState("")
        const [Año,setAño]=useState("")
        const [CVV,setCVV]=useState("")

        function inputTarjeta(evento) {
            setNombre(evento.target.value)
        }

        function tarjetaNomber(evento) {
            setnumeroDTarjeta(evento.target.value)
        }

        function inputMes(evento) {
            setMes(evento.target.value)
        }

        function inputAño(evento) {
            setAño(evento.target.value)
        }

        function inputcvv(evento) {
            setCVV(evento.target.value)
        }



function comprarr() {
   
           const encontrado = compras.filter(Compras => Compras.Nombre === nombre && Compras.tarjeta === numeroDTarjeta && Compras.mes === Mes &&  Compras.año===Año && Compras.cvv === CVV)
         console.log(encontrado);
         
       
             if (encontrado.length === 0) {
                Swal.fire({
                        title: "datos no encontrado",
                        icon: "error",
                        draggable: true
                      });
              }else{
                Swal.fire({
                    title: "Compra realizada",
                    icon: "success",
                    draggable: true
                  });
                 
               
                
              } 
   
    
}



function salir() {
    navigate("/Menu")
}



  return (

    <div>
        <button onClick={salir} id='BTN'>salir</button>
    <div id='divcompras'>
      
       
    <div id='pasarelaDePago'>
    <h3><strong>Informacion de pago</strong></h3>
    <p>Introduce los datos de tu tarjeta para completar la compra.</p>

   
    <label htmlFor="">Nombre de la tarjeta</label>
    <div className="input-icon">
    <i className="bi bi-credit-card-2-back"></i>
        <input type="text" value={nombre} onChange={inputTarjeta} className="form-control" placeholder="nombre completo"/>
    </div>

 <label htmlFor="">Numero de tarjeta</label>

    <div className="input-icon">
    <i className="bi bi-credit-card-2-back"></i>
    <input type="number" value={numeroDTarjeta} onChange={tarjetaNomber} className="form-control" placeholder='numero de la tarjeta' />
    </div>

    <label htmlFor="">Mes</label>
    <div className="input-icon">
    <i className="bi bi-credit-card-2-back"></i>
        <input type="number" value={Mes} onChange={inputMes} className="form-control" placeholder="MM"/>
    </div>

    <label htmlFor="">Año</label>
    <div className="input-icon">
    <i className="bi bi-credit-card-2-back"></i>
        <input type="number" value={Año} onChange={inputAño} className="form-control" placeholder="23"/>
    </div>

    <label htmlFor="">CVV</label>
    <div className="input-icon">
    <i className="bi bi-credit-card-2-back"></i>
        <input type="number" value={CVV} onChange={inputcvv} className="form-control" placeholder="123"/>
    </div>
    
    <button onClick={comprarr} id='btn'>comprar</button>


    </div>

    </div>

    </div>
  )
}

export default Compras