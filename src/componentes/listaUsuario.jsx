import React, { Component } from 'react';
import { Container, Row, Table, Button, Col } from 'react-bootstrap';
import UserService from '../service/userService';

class ListaUsuario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usuarios: []
        }

        this.voltar = this.voltar.bind(this);
        this.novoUsuario = this.novoUsuario.bind(this);
        this.deletaUsuario = this.deletaUsuario.bind(this);
        this.atualizaUsuario = this.atualizaUsuario.bind(this);
    }

    componentDidMount() {
        this.getUsuario();
    }

    getUsuario() {
        UserService.getUser().then(
            (response) =>
                this.setState({ usuarios: response.data })
        ).catch(error => {
            console.log('Deu erro: ', error);
        });
    }

    voltar() {
        this.props.history.push("/");
    }

    novoUsuario() {
        this.props.history.push("/usuario/_add");
    }

    deletaUsuario(id) {
        UserService.deleteUser(id).then(
            res => {
                alert(res.data);
                this.getUsuario();
            }
        ).catch(error => {
            console.log("Error: " + error);
            alert("Deu pau.." + error);
        });
    }

    atualizaUsuario(id) {
        this.props.history.push("/usuario/" + id);
    }

    render() {
        return (
            <Container>
                <Row>
                    <h1>Listagem de Usuários</h1>
                </Row>
                <Row>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Sobrenome</th>
                                <th>Email</th>
                                <th>Deletar/Atualizar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.usuarios.map(

                                    usuario =>

                                        <tr key={usuario.id_usuario}>
                                            <td>
                                                {usuario.id_usuario}
                                            </td>
                                            <td>
                                                {usuario.nome}
                                            </td>
                                            <td>
                                                {usuario.sobrenome}
                                            </td>
                                            <td>
                                                {usuario.email}
                                            </td>
                                            <td>
                                                <Button variant="danger mx-2" onClick={() => this.deletaUsuario(usuario.id_usuario)}>Deletar</Button> {/*onClick={this.deletaUsuario(usuario.id_usuario)} */}
                                                <Button variant="warning" onClick={() => this.atualizaUsuario(usuario.id_usuario)}>Atualizar</Button>
                                            </td>
                                        </tr>
                                )

                            }
                        </tbody>
                    </Table>
                </Row>
                <Row>
                    <Col sm={10}>
                        <Button className="float-left" variant="primary" onClick={this.voltar} >Voltar</Button>
                    </Col>
                    <Col sm={2}>
                        <Button className="float-right" variant="success" onClick={this.novoUsuario}>Novo Usuário</Button>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default ListaUsuario;