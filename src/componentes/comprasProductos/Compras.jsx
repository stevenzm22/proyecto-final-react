import React from 'react'
import "../comprasProductos/Style.css"
import { useNavigate } from 'react-router-dom'

function Compras() {

    const navigate=useNavigate()


function comprarr() {
    //aqui ira un sweetalert simulando la compra
    
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
        <input type="text" className="form-control" placeholder="nombre completo"/>
    </div>

 <label htmlFor="">Numero de tarjeta</label>

    <div className="input-icon">
    <i className="bi bi-credit-card-2-back"></i>
    <input type="number"  className="form-control" placeholder='numero de la tarjeta' />
    </div>

    <label htmlFor="">Mes</label>
    <div className="input-icon">
    <i className="bi bi-credit-card-2-back"></i>
        <input type="number" className="form-control" placeholder="MM"/>
    </div>

    <label htmlFor="">Año</label>
    <div className="input-icon">
    <i className="bi bi-credit-card-2-back"></i>
        <input type="number" className="form-control" placeholder="23"/>
    </div>

    <label htmlFor="">CVV</label>
    <div className="input-icon">
    <i className="bi bi-credit-card-2-back"></i>
        <input type="number" className="form-control" placeholder="123"/>
    </div>
    
    <button onClick={comprarr} id='btn'>comprar</button>


    </div>

    </div>

    </div>
  )
}

export default Compras