import React from 'react'

import "../register/Style.css"

function Registro() {




  return (
    <div id='contenedor'>
        <div id='contenedorDeFormulario'>
            <label htmlFor="">Nombre</label>
            <input value={Nombre} onChange={inputNombre} type="text" />
            <label htmlFor="">Apellido</label>
            <input  value={Apellido} onChange={inputApellido} type="text" />
            <label htmlFor="">Cedula</label>
            <input  value={Cedula} onChange={inputCedula} type="number" />
            <label htmlFor="">Contraseña</label>
            <input  value={Contrasena} onChange={inputContrasena} type="password" />
            <p>ya te registrste?<a href="">iniciar sesion</a></p>
            <button>registrar</button>


        </div>

    </div>
  )
}

export default Registro