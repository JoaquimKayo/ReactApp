import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import BarraNavegacao from './componentes/BarraNavegacao';
import Footer from './componentes/Footer';
import Home from './componentes/Home';

function App() {
  return (
    <React.Fragment>
      <BarraNavegacao />
      <Home />
      <Footer />      
      </React.Fragment>
  );
}

export default App;
