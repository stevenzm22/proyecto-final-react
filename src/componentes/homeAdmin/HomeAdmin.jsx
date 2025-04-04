import React, { useEffect, useState } from 'react'

import "../homeAdmin/Style.css"
import Swal from "sweetalert2";

import LlamadosProductos from '../../service/LlamadosProductos'
import { Link, useNavigate } from 'react-router-dom';

function HomeAdmin() {

    const navigate=useNavigate()
    

const [Productos,setProductos]=useState("")
const [Descripcion,setDescripcion]=useState("")
const [Precio,setPrecio]=useState("")
const [Tamano,setTamano]=useState("")
const [usuarioProductos,setusuarioProductos]=useState([])
const [Img,setImg]=useState()
const [valor,setValor]=useState([])

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


 async function enviarProductos() {
    if (!Productos.trim() || !Descripcion.trim() ||  !Precio.trim() || Tamano === "") {
        Swal.fire({
          title: "ingrese los datos",
          icon: "error",
          draggable: true
        });
  
      } else {
    
       
      const nuevosValores= await LlamadosProductos.PostProductos(Productos,Descripcion,Precio,Tamano,Img)
       setusuarioProductos([...usuarioProductos,nuevosValores])
        
        Swal.fire({
          title: "registro exitoso",
          icon: "success",
          draggable: true 
        });
       
      
      }
   
      
}

//aqui se guardan las imagenes 

const inputImagen= (e)=>{
    //console.log(e.target.files);
const guardarImagen= new FileReader()
guardarImagen.addEventListener("load",()=>{
    setImg(guardarImagen.result)

})
guardarImagen.readAsDataURL(e.target.files[0])

}


function atras() {
 
    navigate("/HomeAdmin")
}


async function Editar(id) {
    const datosNuevos= await LlamadosProductos.GetProducto(id)
    console.log(datosNuevos);
    const { value: formValues } = await Swal.fire({
        title: "Editar Producto",
        html: `
          <input id="swal-input1" value="${datosNuevos.productos}" class="swal2-input">
          <input id="swal-input2" value="${datosNuevos.descripcion}" class="swal2-input">
          <input id="swal-input3"value="${datosNuevos.precio}" class="swal2-input">
         
        `,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
            document.getElementById("swal-input3").value
          ];
        }
      });
      console.log(formValues[0]);
      
      if (formValues) {
        LlamadosProductos.UpdateProductos(formValues[0],formValues[1],formValues[2], id )
        const datos= await LlamadosProductos.GetProductos()
        setusuarioProductos(datos)
        Swal.fire(JSON.stringify(formValues));

      }
}

async function Eliminar(id) {
  const result = await Swal.fire({
      title: "¿Seguro que desea eliminar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!"
  });

  if (result.isConfirmed) {
    const datosEliminados= await LlamadosProductos.DeleteProductos(id); 
   
      await Swal.fire({
          title: "¡Eliminado!",
          text: "Eliminado correctamente.",
          icon: "success"
          
      });
      location.reload();
     
     
  }
}

function vaciarCampos() {
    setProductos("")
    setDescripcion("")
    setPrecio("")
    setTamano("")
    setImg("")
  
}



  return (
<div>

     <div id='contenedorr'>
        
        <nav>
    
          <ul id='navart'>
            <li></li>
            <li  className='lit'><Link to="/HomeAdmin">Home</Link></li>
            <li  className='lit'><Link to="/Menu">Menu</Link></li>
          
        
            <li>
          
                <button onClick={atras} className="button">
                <span className="button-content">Atras</span>
                </button>

            </li>
            
          </ul>
    
        </nav>
    
        </div>

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
            <input type="file" onChange={inputImagen} />

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
            <th>Editar</th>
            <th>Eliminar</th>
        </tr> 
        </thead>    
        <tbody>
            {usuarioProductos.map((producto, index) => (
        <tr key={index}>
            <td>
                <img src={producto.imagenB64} alt={producto.producto} className='imagenesM' />
            </td>
            <td>{producto.productos}</td>
            <td>{producto.descripcion}</td>
            <td>{producto.precio}</td>
            <td>{producto.Tamano}</td>
            <td><button onClick={e=>Editar(producto.id)} className='buton'>Editar</button></td>
            <td><button onClick={e=>Eliminar(producto.id)} className='buton'>Eliminar</button></td>

        </tr>
            ))}
    </tbody>
    </table>
</div>

    </div>

    </div>
  )
}

export default HomeAdmin