import React from 'react'
import "../login/Style.css"

function Login() {
  return (
    <div id='div'>

          <div id='contenedorDeFormulario'>
            <label htmlFor="">Nombre</label>
            <input type="text" />
            <label htmlFor="">Apellido</label>
            <input type="text" />
            <label htmlFor="">Cedula</label>
            <input type="number" />
            <label htmlFor="">Contraseña</label>
            <input type="password" />
            <p>ya te registrste?<a href="">iniciar sesion</a></p>
            <button>registrar</button>

          </div>
    </div>
  )
}

export default Login