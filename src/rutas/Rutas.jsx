import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homes from '../pages/Homes';
import PagRegistro from "../pages/PagRegistro"
import Login from '../componentes/login/Login';







function Rutas() {

  return (
    <div>
      <Router>
        <Routes>
      
                        

                    <Route path="Home" element={<Homes/>}/>
                    <Route path="Registro" element={<PagRegistro/>}/>
                    <Route path="Login" element={<Login/>}/>
                    
                   
                      
                            
        </Routes>
      </Router>
    </div>
  );
}

export default Rutas