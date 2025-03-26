import React from 'react'

import "../principalAdmin/Style.css"
import { useNavigate } from 'react-router-dom'

function ADhome() {

  const navigate = useNavigate()

  function salir() {
    navigate("/Login")
  }

  return (
    <div>
         <nav>
        
              <ul id='navarr'>
              
               
                <li  className='lii'><a href="/Menu">menú</a></li>
                <li  className='lii'><a href="/Login">login</a></li>
                <li  className='lii'><a href="/admin">inventario</a></li>
                <li  className='lii'><a href="/usuarios">usuarios</a></li>
                <li><button onClick={salir} id='boton'>atras</button></li>
               
                


              

              
              </ul>
        
            </nav>
        
    </div>
  )
}

export default ADhome