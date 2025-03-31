import React from 'react'
import "../homes/Style.css"
import { useNavigate } from 'react-router-dom'
import icono from "../nav/icono.png"



function Home() {

  const navigate=useNavigate()

  
function menu () {
  navigate("/Menu")
}

function saber() {
  navigate("/info")
}



  return (

    
    <div id='body'>


      

      <div id='Contenedores2'>

      <div id='divImagen'> </div>

      <div id='contenedorhp'>

        <img src={icono} alt="" className='imagenHome'  />
        <h2 id='titulo2'>Nuestras comidas</h2>
        <p id='parraffo'>
        Somos expertos en comida rápida, perfecta para satisfacer cualquier antojo. En nuestro menú 
        encontrarás hamburguesas irresistibles, crujientes salchipapas, hot dogs, nuggets y muchas más 
        opciones deliciosas. Todo preparado al momento con ingredientes de calidad.
        </p>
        <button onClick={menu} className='btn'>Menú</button>

      </div>

      </div>

      {/* contenedor 2 */}
      <div id='Contenedores3'>

<div id='contenedorHP'>
<img src={icono} alt="" className='imagenHome' />

  <h2 id='titulo3'>Saber mas</h2>
    <p id='parraffo'>
    A lo largo del tiempo, hemos crecido gracias a la confianza de quienes
     disfrutan de nuestra cocina, manteniendo siempre el compromiso de brindar
      un sabor excepcional en cada bocado.
    </p>
    <button onClick={saber} className='btn'>Saber mas</button>
</div>

<div id='divImagen1'> </div>

</div>

  
    </div> /*final del div principal */
  )
}

export default Home