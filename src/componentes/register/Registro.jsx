import React, { useState } from 'react'

import "../register/Style.css"
import Llamados from "../../service/Llamados"
import Swal from "sweetalert2";


function Registro() {

  const [Nombre,setNombre]=useState("")
  const [Apellido,setApellido]=useState("")
  const [Cedula,setCedula]=useState("")
  const [Contrasena,setContrasena]=useState("")

  function inputNombre(evento) {
    setNombre(evento.target.value)
  }

  function inputApellido(evento) {
    setApellido(evento.target.value)
  }

  function inputCedula(evento) {
    setCedula(evento.target.value)
  }
  function inputContrasena(evento) {
    setContrasena(evento.target.value)
  }

  function registrar() {

    if (!Nombre.trim() || !Apellido.trim() ||  !Cedula.trim() || !Contrasena.trim() ) {
      Swal.fire({
        title: "ingrese los datos",
        icon: "error",
        draggable: true
      });

    } else {
      Llamados.PostUser(Nombre,Apellido,Cedula,Contrasena)

      Swal.fire({
        title: "registro exitoso",
        icon: "success",
        draggable: true
      });
    }
    

    

  }



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
            <button onClick={registrar}>registrar</button>


        </div>

    </div>
  )
}

export default Registro