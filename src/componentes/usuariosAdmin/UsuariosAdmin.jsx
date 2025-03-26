import React, { useEffect, useState } from 'react'

import Llamados from '../../service/Llamados';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';



function UsuariosAdmin() {

    const [usuarios,setusuarios]=useState([])

    const navigate=useNavigate()
  
    
     useEffect(() => {
    
         async  function mostarUsuario() {
             const datos= await Llamados.GetUser()
             console.log(datos);
     
             setusuarios(datos)
         }
      
         mostarUsuario()
        }, []); 



async function Editar(id) {
    const { value: formValues } = await Swal.fire({
        title: "Editar Rol",
        html: `
          <input id="swal-input1" placeholder="producto" class="swal2-input">
         
         
        `,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
           
          ];
        }
      });
      console.log(formValues[0]);
      
      if (formValues) {
        Llamados.UpdateUser(formValues[0], id )

        Swal.fire(JSON.stringify(formValues));

      }
}

function Eliminar(id) {
    Swal.fire({
        title: "¿seguro lo desea eliminar?",
        
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "si, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
            Llamados.DeleteUser(id)
          Swal.fire({
            title: "eliminado!",
            text: "eliminado correctamente.",
            icon: "success"
          });
        }
      //  window.location.reload();
      });
    }


    function salir() {
      navigate("/HomeAdmin")
      
    }


  return (
    <div>

    <div>

        <button onClick={salir}>atras</button>

    </div>
<br />
    <table id='tabla'>

        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Cédula</th>
                <th>Rol</th>
                <th>Editar</th>
                <th>Eliminar</th>
            </tr>
        </thead>
        <tbody>
        {usuarios.map((Usuario, index) => (
            <tr key={index}>
                
                <td><strong>{Usuario.Nombre}</strong></td>
                <td><strong>{Usuario.Apellido}</strong></td>
                <td><strong>{Usuario.Cedula}</strong></td>
                <td><strong>{Usuario.rol}</strong></td>
                <td><button onClick={e=>Editar(Usuario.id)}>Editar</button></td>
                <td><button onClick={e=>Eliminar(Usuario.id)}>Eliminar</button></td>
                
            </tr>
        ))}
        </tbody>
        </table>


    </div>
  )
}

export default UsuariosAdmin