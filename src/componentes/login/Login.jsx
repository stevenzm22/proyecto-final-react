import React, { useEffect, useState } from 'react'
import "../login/Style.css"
import Swal from "sweetalert2";
import Llamados from '../../service/Llamados';
import { useNavigate } from 'react-router-dom';


function Login() {

  const [usuarios,setusuarios]=useState([])

   const navigate= useNavigate()
   
    useEffect(() => {
   
        async  function recuperarDatos() {
            const datos= await Llamados.GetUser()
            console.log(datos);
    
            setusuarios(datos)
        }
     
        recuperarDatos()
    
      }, []); 

      const [Nombre,setNombre]=useState()
      const [Apellido,setApellido]=useState()
      const [Cedula,setCedula]=useState()
      const [Contrasena,setContrasena]=useState()

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

      function iniciar() {
       
        const encontrado = usuarios.filter(Usuario => Usuario.Nombre===Nombre && Usuario.Apellido=== Apellido && Usuario.Cedula===Cedula &&  Usuario.Contrasena===Contrasena)
        console.log(encontrado.length);
        
     
       if (encontrado.length === 0) {
         Swal.fire({
                 title: "usuario no encontrado",
                 icon: "error",
                 draggable: true
               });
       }else{
     
        navigate("/Home")
         
       }

      }






  return (
    <div id='div'>

          <div id='contenedorDeFormulario'>
            <h2>inicio de sesion</h2>
            <label htmlFor="">Nombre</label>
            <input value={Nombre} onChange={inputNombre} type="text" />
            <label htmlFor="">Apellido</label>
            <input value={Apellido} onChange={inputApellido} type="text" />
            <label htmlFor="">Cedula</label>
            <input value={Cedula} onChange={inputCedula} type="number" />
            <label htmlFor="">Contraseña</label>
            <input value={Contrasena} onChange={inputContrasena} type="password" />
            <p>ya te registraste?<a href="/Registro">registrar</a></p>
            <button onClick={iniciar}>iniciar sesion</button>

          </div>
    </div>
  )
}

export default Login