import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import logo from '../imgs/logo192.png';

class BarraNavegacao extends Component {
    render() {
        return (
            <header>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        SpringAPP
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/usuario">Usuários</Nav.Link>
                        <Nav.Link href="/veiculo">Veículos</Nav.Link>
                    </Nav>

                </Navbar>
            </header>
        );
    }
}

export default BarraNavegacao;