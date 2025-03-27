import React from 'react'
import "../infomracionTienda/Style.css"
import { useNavigate } from 'react-router-dom'

function Informacion() {

const navigate=useNavigate()


function salir() {
    navigate("/")
}

  return (
    <div className="container">
    
    <button onClick={salir} className="btn-salir">Salir</button>

   
    <div>
      <h1 className="title">Nuestra Historia</h1>
      <p className="text">
        Nacimos con la idea de ofrecer comida rápida con gran sabor, ingredientes frescos y un servicio ágil, sin perder la calidad.
        Desde el primer día, nuestro objetivo ha sido ser el lugar favorito de quienes buscan una opción deliciosa y rápida para cualquier momento del día.
        Con un menú variado que incluye hamburguesas, salchipapas y otros platillos irresistibles, nos esforzamos por brindar experiencias memorables en cada bocado.
      </p>
    </div>

    
    <div className="section">
      <h1 className="title">Misión</h1>
      <p className="text">
        Satisfacer el gusto y la necesidad de quienes buscan comida rápida sin sacrificar calidad ni sabor.
        Nos comprometemos a ofrecer platillos frescos, preparados al momento, con un servicio eficiente y un ambiente acogedor.
      </p>
    </div>

    
    <div className="section">
      <h1 className="title">Visión</h1>
      <p className="text">
        Ser el referente en comida rápida en nuestra comunidad, reconocidos por nuestro sabor inigualable, rapidez y atención al cliente.
        Queremos que cada persona que nos visite nos recuerde por nuestra calidad y buen servicio.
      </p>
    </div>

   
    <div className="section">
      <h1 className="title">Valores</h1>
      <ul className="values-list">
        <li className="value-item"> <strong>Calidad:</strong> Usamos ingredientes frescos y preparamos cada platillo con esmero.</li>
        <li className="value-item"> <strong>Rapidez:</strong> Servimos con eficiencia, sin hacer esperar a nuestros clientes.</li>
        <li className="value-item"> <strong>Atención:</strong> Brindamos un servicio amable y cercano para que cada visita sea especial.</li>
        <li className="value-item"> <strong>Innovación:</strong> Siempre buscamos nuevas formas de sorprender con sabores únicos.</li>
        <li className="value-item"> <strong>Pasión:</strong> Amamos lo que hacemos y eso se refleja en cada detalle.</li>
      </ul>
    </div>
  </div>
  )
}

export default Informacion