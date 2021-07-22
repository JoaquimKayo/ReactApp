import React, { Component } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import UserService from '../service/userService';

class CreateUpdateUsuario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id_usuario: this.props.match.params.id,
            nome: "",
            sobrenome: "",
            email: ""
        }

        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeSobrenomeHandler = this.changeSobrenomeHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.salvarUsuario = this.salvarUsuario.bind(this);
    }

    componentDidMount() {
        if (this.state.id_usuario === "_add") {
            return false;
        } else {
            return UserService.getUserById(this.state.id_usuario).then(
                (res) => {
                    let usuario = res.data;
                    this.setState(
                        {
                            nome: usuario.nome,
                            sobrenome: usuario.sobrenome,
                            email: usuario.email
                        }
                    );
                }
            ).catch(error => {
                console.log("Deu erro:" + error);
            });
        }
    }

    changeNomeHandler(event) {
        this.setState({ nome: event.target.value });
    }

    changeSobrenomeHandler(event) {
        this.setState({ sobrenome: event.target.value });
    }

    changeEmailHandler(event) {
        this.setState({ email: event.target.value });
    }

    retornaListagem() {
        this.props.history.push("/usuarios");
    }

    salvarUsuario() {
        let usuario = {
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            email: this.state.email
        }

        if (this.state.id_usuario === "_add") {
            UserService.newUser(usuario).then(
                (res) => {
                    alert(res.data);
                    this.props.history.push("/usuarios");
                }
            ).catch(error => {
                console.log("Deu erro: " + error);
            });
        } else {
            usuario.id_usuario = this.state.id_usuario;
            UserService.updateUser(usuario).then(
                (res) => {
                    console.log(res.data);
                    this.props.history.push("/usuarios");
                }
            ).catch(error => {
                console.log("Error: "+error);
            });
        }

        //this.props.history.push("/usuarios");
        this.retornaListagem.bind(this);
        
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <h1>Cadastro de Usuários</h1>
                </Row>
                <Form>
                    <Form.Group controlId="formNome" className="mb-3">
                        <Form.Label>
                            Digite o nome.
                        </Form.Label>
                        <Form.Control type="text" placeholder="Nome" value={this.state.nome} onChange={this.changeNomeHandler} />
                    </Form.Group>

                    <Form.Group controlId="formSobrenome" className="mb-3">
                        <Form.Label>
                            Digite o sobrenome.
                        </Form.Label>
                        <Form.Control type="text" placeholder="Sobrenome" value={this.state.sobrenome} onChange={this.changeSobrenomeHandler} />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Label>
                            Digite o Email.
                        </Form.Label>
                        <Form.Control type="email" placeholder="example@email.com" value={this.state.email} onChange={this.changeEmailHandler} />
                    </Form.Group>

                    <Button variant="success" className="btnSubmit m-3" onClick={this.salvarUsuario}>
                        Salvar Usuário
                    </Button>
                    <Button variant="danger" onClick={this.retornaListagem.bind(this)} >
                        Cancelar
                    </Button>


                </Form>
            </Container>
        );
    }
}

export default CreateUpdateUsuario;