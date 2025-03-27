import React from 'react'
import icono from "../nav/icono.png" 

import 'bootstrap/dist/css/bootstrap.min.css';
import "../nav/Style.css"



function Nav() {





  return (
    <div id='contenedorr'>
    
    <nav>

      <ul id='navar'>
        <li className='li'><img id='img' src={icono} alt="" /></li>
        <li  className='li'><a href="/">inicio</a></li>
        <li  className='li'><a href="/Menu">menú</a></li>
        <li  className='li'><a href="/Login">login</a></li>
        <li className='li'> <a href="/info">Sobre nosotros</a></li>
        
      </ul>

    </nav>

    </div>
  )
}

export default Nav