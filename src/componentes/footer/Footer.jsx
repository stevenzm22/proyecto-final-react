import React from 'react'

import "../footer/Style.css"

import "bootstrap-icons/font/bootstrap-icons.css";
function Footer() {


  return (
    <div id='footer'>

       <div className='div'>
        <h2>Contactos</h2>
        <i className="bi bi-telephone-fill"></i> 6190-6284
        <i className="bi bi-telephone-fill"></i> 6190-9393
       </div>

       <div className='div'>
        <h2> Horario</h2>
        <h5><i className="bi bi-calendar-date"></i> lunes a viernes </h5>
        <p>6am a 12 pm</p>
        <h5><i className="bi bi-calendar-date"></i>sabdos y domingos</h5>
        <p>10 am a 12pm</p>
       </div>

       <div className='div'>
        <h2>dirección</h2>
        <i className="bi bi-geo-alt"></i> <a href="https://maps.app.goo.gl/mqGLVr3BkqRWsR857" target="_blank">primera entra de San luis,costado oeste de la escuela,145 mts norte</a>
       </div>

       <div className='div'>
        <h2>Redes Sociales</h2>
        <i class="bi bi-whatsapp"></i> 6199-2244
       </div>

    </div>
  )
}

export default Footer