import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import BarraNavegacao from './componentes/BarraNavegacao';
import Footer from './componentes/Footer';
import Home from './componentes/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListaUsuario from './componentes/listaUsuario';
import ListaVeiculo from './componentes/listaVeiculo';
import CreateUpdateUsuario from './componentes/CreateUpdateUsuario';
import CreateUpdateVeiculo from './componentes/CreateUpdateVeiculo';

function App() {
  return (
    //<React.Fragment>
    <Router>
      <BarraNavegacao />
      <main class="margin-bottom-150">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/usuarios" component={ListaUsuario}></Route>
          <Route exact path="/veiculos" component={ListaVeiculo}></Route>
          <Route path="/usuario/:id" component={CreateUpdateUsuario}></Route>
          <Route path="/veiculo/:id" component={CreateUpdateVeiculo}></Route>
        </Switch>
      </main>
      <Footer />
    </Router>
    //</React.Fragment>
  );
}

export default App;
