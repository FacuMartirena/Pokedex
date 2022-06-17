import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Buscador from "./paginas/Buscador";
import Detalles from "./paginas/Detalles";
import './index.css'
import './App.css'



function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
        path='/'
        element={<Buscador />}
        />

        <Route
        path='/detalles/:id'
        element={<Detalles />}
        />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
