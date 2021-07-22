import React, { Component } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import VehicleService from '../service/vehicleService';

class CreateUpdateVeiculo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id_veiculo: this.props.match.params.id,
            placa: "",
            marca: "",
            modelo: "",
            ano: "",
            cor: "",
            combustivel: ""
        }

        this.changePlacaHandler = this.changePlacaHandler.bind(this);
        this.changeMarcaHandler = this.changeMarcaHandler.bind(this);
        this.changeModeloHandler = this.changeModeloHandler.bind(this);
        this.changeAnoHandler = this.changeAnoHandler.bind(this);
        this.changeCorHandler = this.changeCorHandler.bind(this);
        this.changeCombustivelHandler = this.changeCombustivelHandler.bind(this);

        this.salvarVeiculo = this.salvarVeiculo.bind(this);
    }


    componentDidMount() {
        if (this.state.id_veiculo === "_add") {
            return false;
        } else {
            return VehicleService.getVehicleById(this.state.id_veiculo).then(
                (res) => {
                    let veiculo = res.data;
                    this.setState(
                        {
                            placa: veiculo.placa,
                            marca: veiculo.marca,
                            modelo: veiculo.modelo,
                            ano: veiculo.ano,
                            cor: veiculo.cor,
                            combustivel: veiculo.combustivel
                        }
                    );
                }
            ).catch(error => {
                console.log("Deu erro:" + error);
            });
        }
    }

    changePlacaHandler(event) {
        this.setState({ placa: event.target.value });
    }

    changeMarcaHandler(event) {
        this.setState({ marca: event.target.value });
    }

    changeModeloHandler(event) {
        this.setState({ modelo: event.target.value });
    }

    changeAnoHandler(event) {
        this.setState({ ano: event.target.value });
    }

    changeCorHandler(event) {
        this.setState({ cor: event.target.value });
    }

    changeCombustivelHandler(event) {
        this.setState({ combustivel: event.target.value });
    }

    retornaListagem() {
        this.props.history.push("/veiculos");
    }

    salvarVeiculo() {
        let veiculo = {
            placa: this.state.placa,
            marca: this.state.marca,
            modelo: this.state.modelo,
            ano: this.state.ano,
            cor: this.state.cor,
            combustivel: this.state.combustivel
        }

        if (this.state.id_veiculo === "_add") {
            VehicleService.newVehicle(veiculo).then(
                (res) => {
                    alert(res.data);
                    this.props.history.push("/veiculos");
                }
            ).catch(error => {
                console.log("Deu erro: " + error);
            });
        } else {
            veiculo.id_veiculo = this.state.id_veiculo;
            VehicleService.updateVehicle(veiculo).then(
                (res) => {
                    console.log(res.data);
                    this.props.history.push("/veiculos");
                }
            ).catch(error => {
                console.log("Error: " + error);
            });
        }

        //this.props.history.push("/usuarios");
        this.retornaListagem.bind(this);
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <h1>Cadastro de Veículos</h1>
                </Row>
                <Form>
                    <Form.Group controlId="formPlaca" className="mb-3">
                        <Form.Label>
                            Digite a Placa.
                        </Form.Label>
                        <Form.Control type="text" placeholder="Placa" value={this.state.placa} onChange={this.changePlacaHandler} />
                    </Form.Group>

                    <Form.Group controlId="formMarca" className="mb-3">
                        <Form.Label>
                            Digite a Marca.
                        </Form.Label>
                        <Form.Control type="text" placeholder="Marca" value={this.state.marca} onChange={this.changeMarcaHandler} />
                    </Form.Group>

                    <Form.Group controlId="formModelo" className="mb-3">
                        <Form.Label>
                            Digite o Modelo.
                        </Form.Label>
                        <Form.Control type="text" placeholder="Modelo" value={this.state.modelo} onChange={this.changeModeloHandler} />
                    </Form.Group>

                    <Form.Group controlId="formAno" className="mb-3">
                        <Form.Label>
                            Digite o Ano.
                        </Form.Label>
                        <Form.Control type="number" placeholder="Ano" min="1900" max="2022" value={this.state.ano} onChange={this.changeAnoHandler} />
                    </Form.Group>

                    <Form.Group controlId="formCor" className="mb-3">
                        <Form.Label>
                            Digite a Cor.
                        </Form.Label>
                        <Form.Control type="text" placeholder="Cor" value={this.state.cor} onChange={this.changeCorHandler} />
                    </Form.Group>

                    <Form.Group controlId="formModelo" className="mb-3">
                        <Form.Label>
                            Informe o tipo do Combustível.
                        </Form.Label><br/>
                        <Form.Control name="combustivel" as="select"
                            custom
                            onChange={this.changeCombustivelHandler}>
                            <option selected disabled value=""> --Selecione Combustível-- </option>
                            <option value="Flex">FLEX</option>
                            <option value="Gasolina">GASOLINA</option>
                            <option value="Etanol">ETANOL</option>
                            <option value="Diesel">DÍESEL</option>
                            <option value="Eletrico">ELÉTRICO</option>
                            <option value="Gas_Natural">GÁS NATURAL</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="success" className="btnSubmit m-3" onClick={this.salvarVeiculo}>
                        Salvar Veículo
                    </Button>
                    <Button variant="danger" onClick={this.retornaListagem.bind(this)} >
                        Cancelar
                    </Button>


                </Form>
            </Container>
        );
    }
}

export default CreateUpdateVeiculo;