import React, { useEffect, useState } from 'react'

import "../homeAdmin/Style.css"
import Swal from "sweetalert2";

import LlamadosProductos from '../../service/LlamadosProductos'

function HomeAdmin() {
    

const [Productos,setProductos]=useState("")
const [Descripcion,setDescripcion]=useState("")
const [Precio,setPrecio]=useState("")
const [Tamano,setTamano]=useState("")
const [usuarioProductos,setusuarioProductos]=useState([])

useEffect(() => {
   
    async  function recuperarDatos() {
        const datos= await LlamadosProductos.GetProductos()
       

       setusuarioProductos(datos)
    }
 
    recuperarDatos()

  }, []);



function inputNombre (evento) {
    setProductos(evento.target.value)
    
}

function inputDescripcion(evento) {
    setDescripcion(evento.target.value)
    
}
function inputPrecio(evento) {
    setPrecio(evento.target.value)

}

function selectTamano(evento) {
    setTamano(evento.target.value)
    
}
function enviarProductos() {
    if (!Productos.trim() || !Descripcion.trim() ||  !Precio.trim() || Tamano === "") {
        Swal.fire({
          title: "ingrese los datos",
          icon: "error",
          draggable: true
        });
  
      } else {
        LlamadosProductos.PostProductos(Productos,Descripcion,Precio,Tamano)
  
        Swal.fire({
          title: "registro exitoso",
          icon: "success",
          draggable: true 
        });
      }
      location.reload()
  
    
}

const inputNombre=(evento)=> {

    const datos=new FileReader()
}



  return (

    <div id='contenedorM'>
         <div id='contform'>
        
            <h2>guardar inventario</h2>
            <label htmlFor="">producto</label>
            <input value={Productos} onChange={inputNombre} type="text" placeholder='productos' />
            <label htmlFor="">descripcion</label>
            <input value={Descripcion} onChange={inputDescripcion} type="text" placeholder='text....'/>
            <label htmlFor="">precio</label>
            <input value={Precio} onChange={inputPrecio} type="text"placeholder='precio' />

            <label htmlFor="">archivo o imagen</label>
            <input onChange={inputImagen} type="file" />

            <label htmlFor="">tamaño</label>
            <select value={Tamano} onChange={selectTamano} name="" id="" > 
                <option value="grande" selected>grande</option>
                <option value="mediano">mediano</option>
                <option value="pequeño">pequeño</option>
            </select>
            <button onClick={enviarProductos}>enviar</button>

        </div>

        <div id='contenedor2'>
  <table id='tabla'>
    <thead>
      <tr>
        <th>Imagen</th>
        <th>Producto</th>
        <th>Descripción</th>
        <th>Precio</th>
        <th>Tamaño</th>
      </tr>
    </thead>
    <tbody>
      {usuarioProductos.map((producto, index) => (
        <tr key={index}>
          <td>
            <img src={producto.imagen} alt={producto.producto} />
          </td>
          <td>{producto.productos}</td>
          <td>{producto.descripcion}</td>
          <td>{producto.precio}</td>
          <td>{producto.Tamano}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  )
}

export default HomeAdmin