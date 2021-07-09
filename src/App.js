import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import BarraNavegacao from './componentes/BarraNavegacao';
import Footer from './componentes/Footer';
import Home from './componentes/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListaUsuario from './componentes/listaUsuario';
import ListaVeiculo from './componentes/listaVeiculo';

function App() {
  return (
    //<React.Fragment>
    <Router>
      <BarraNavegacao />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/usuarios" component={ListaUsuario}></Route>
        <Route exact path="/veiculos" component={ListaVeiculo}></Route>
      </Switch>
      <Footer />
    </Router>
    //</React.Fragment>
  );
}

export default App;
