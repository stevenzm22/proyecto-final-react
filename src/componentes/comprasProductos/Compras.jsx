import React from 'react'
import "../comprasProductos/Style.css"

function Compras() {
  return (
    <div>
       
    <div id='pasarelaDePago'>
    <h3>informacion de pago</h3>
    <p>Introduce los datos de tu tarjeta para completar la compra</p>

   
    <label htmlFor="">nombre de la tarjeta</label>
    <div class="input-icon">
    <i class="bi bi-credit-card-2-back"></i>
        <input type="text" class="form-control" placeholder="nombre completo"/>
    </div>

 <label htmlFor="">numero de tarjeta</label>

    <div class="input-icon">
    <i class="bi bi-credit-card-2-back"></i>
    <input type="number"  class="form-control" placeholder='numero de la tarjeta' />
    </div>

    <div class="input-icon">
    <i class="bi bi-credit-card-2-back"></i>
        <input type="number" class="form-control" placeholder="MM"/>
    </div>

    <div class="input-icon">
    <i class="bi bi-credit-card-2-back"></i>
        <input type="number" class="form-control" placeholder="Año"/>
    </div>

    <div class="input-icon">
    <i class="bi bi-credit-card-2-back"></i>
        <input type="number" class="form-control" placeholder="CVV"/>
    </div>
   


    </div>

    </div>
  )
}

export default Compras