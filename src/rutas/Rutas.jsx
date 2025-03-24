import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homes from '../pages/Homes';
import PagRegistro from "../pages/PagRegistro"
import Login from '../componentes/login/Login';
import HomePinc from '../pages/HomePinc';
import PagMenu from '../pages/PagMenu';
import HomeAdmin from '../pages/HomeAdmin';








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
                    <Route path="HomeAdmin" element={<HomeAdmin/>}/>
                  
                    
                    
                   
                      
                            
        </Routes>
      </Router>
    </div>
  );
}

export default Rutas