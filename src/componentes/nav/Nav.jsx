import React from 'react'
import icono from "../nav/icono.png" 

import 'bootstrap/dist/css/bootstrap.min.css';
import "../nav/Style.css"
import { Link } from 'react-router-dom';



function Nav() {





  return (
    <div id='contenedorr'>
    
    <nav>

      <ul id='navar'>
        <li className='li'><img id='img' src={icono} alt="" /></li>
        <li  className='li'><Link to="/">Inicio</Link></li>
        <li  className='li'><Link to="/Menu">Menu</Link></li> 
        <li  className='li'><Link to="/Login">Login</Link></li>
        <li className='li'> <Link to="/info">Saber Mas</Link></li>
        
      </ul>

    </nav>

    </div>
  )
}

export default Nav