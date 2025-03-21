import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homes from '../pages/Homes';
import PagRegistro from "../pages/PagRegistro"
import Login from '../componentes/login/Login';
import HomePinc from '../pages/HomePinc';
import PagMenu from '../pages/PagMenu';







function Rutas() {

  return (
    <div>
      <Router>
        <Routes>
      
                        

                    <Route path="/" element={<Homes/>}/>
                    <Route path="Registro" element={<PagRegistro/>}/>
                    <Route path="Login" element={<Login/>}/>
                    <Route path="admin" element={<HomePinc/>}/>
                    <Route path="Menu" element={<PagMenu/>}/>
                    
                    
                   
                      
                            
        </Routes>
      </Router>
    </div>
  );
}

export default Rutas