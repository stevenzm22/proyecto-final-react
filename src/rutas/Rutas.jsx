import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homes from '../pages/Homes';
import PagRegistro from "../pages/PagRegistro"
import Login from '../componentes/login/Login';
import HomePinc from '../pages/HomePinc';







function Rutas() {

  return (
    <div>
      <Router>
        <Routes>
      
                        

                    <Route path="Home" element={<Homes/>}/>
                    <Route path="Registro" element={<PagRegistro/>}/>
                    <Route path="Login" element={<Login/>}/>
                    <Route path="admin" element={<HomePinc/>}/>
                    
                   
                      
                            
        </Routes>
      </Router>
    </div>
  );
}

export default Rutas