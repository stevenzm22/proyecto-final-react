import React, { useEffect, useState } from 'react'
import "../Menu/Style.css"

import LlamadosProductos from '../../service/LlamadosProductos';
import { useNavigate } from 'react-router-dom';

function Menu() {


  const navigate=useNavigate()
  const [MostarProductos,setMostarProductos]=useState([])

  useEffect(() => {
     
      async  function recuperarDatos() {
          const datos= await LlamadosProductos.GetProductos()
         
  
          setMostarProductos(datos)
      }
   
      recuperarDatos()
  
    }, []);


    function salir() {
      navigate("/")
    }




  return (
    <div>
        <section>
          <h1>Menú</h1>

          <button onClick={salir}  className="button">
                <span className="button-content">salir</span>
          </button>

        </section>
<br />
<div id='contenedorMenu'>
  {MostarProductos.map((producto, index) => (

    <div className='menuIMG'>
     
      <img src={producto.imagenB64} alt={producto.producto} className='imagenesM' />
    
      <section id='sectionMenu'>

        <p>{producto.descripcion}</p>
        </section>
        
        <button className="buttonA">
          <span className="button-contentA">comprar</span>
        </button>

     
    </div>  
  ))}
</div>

       

       
       
         
       


       

       
    </div>
  )
}

export default Menu