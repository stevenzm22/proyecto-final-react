import React from 'react'
import "../homes/Style.css"

/*  import papasFritas from "../homes/papasFritas.jpg"
  import salchipapas from "../homes/salchipapas.jpg"
  import salchipapicarne from "../homes/salchipapicarne.jpg"
  import patacones from "../homes/patacones.jpg" */




function Home() {

  


  return (

    
    <div id='body'>


      <section>
        <p id='letra'><strong>Soda Zuñiga</strong> es el lugar perfecto para los amantes de la comida rápida y
           sabrosa.<a href="">Nuestro menú</a> incluye deliciosas hamburguesas jugosas, 
           salchipapas bien cargadas, y nuestra especialidad: salchipapicarne, 
           una combinación irresistible de papas crujientes, salchichas y carne 
           sazonada a la perfección. Todo acompañado de una Coca-Cola bien fría para 
           completar la experiencia. ¡Ven y disfruta del mejor sabor en cada bocado!</p>
      </section>

      <div id='Contenedores2'>

      <div id='divImagen'> </div>

      <div id='contenedorhp'>

        <h2 id='titulo2'>Nuestras comidas</h2>
        <p id='parraffo'>
        Somos expertos en comida rápida, perfecta para satisfacer cualquier antojo. En nuestro menú 
        encontrarás hamburguesas irresistibles, crujientes salchipapas, hot dogs, nuggets y muchas más 
        opciones deliciosas. Todo preparado al momento con ingredientes de calidad.
        </p>
        <button className='btn'>Menú</button>

      </div>

      </div>

      {/* contenedor 2 */}
      <div id='Contenedores3'>

<div id='contenedorHP'>

  <h2 id='titulo3'>Nuestras comidas</h2>
    <p id='parraffo'>
    Somos expertos en comida rápida, perfecta para satisfacer cualquier antojo. En nuestro menú 
    encontrarás hamburguesas irresistibles, crujientes salchipapas, hot dogs, nuggets y muchas más 
    opciones deliciosas. Todo preparado al momento con ingredientes de calidad.
    </p>
    <button className='btn'>Menú</button>
</div>

<div id='divImagen1'> </div>

</div>

  
    </div> /*final del div principal */
  )
}

export default Home