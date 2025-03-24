import React from 'react'

function UsuariosAdmin() {
  return (
    <div>

{/* aqui el admin podra editar el rol de la persona */}

<table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Cédula</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Aquí puedes mapear los datos de los usuarios */}
                </tbody>
            </table>


    </div>
  )
}

export default UsuariosAdmin