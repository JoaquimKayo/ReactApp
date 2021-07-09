import React, { Component } from 'react';
import { Container, Row, Table, Button, Col } from 'react-bootstrap';
import VehicleService from '../service/vehicleService';

class ListaVeiculo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            veiculos: []
        }

        this.voltar = this.voltar.bind(this);
    }

    componentDidMount() {
        this.getVeiculo();
    }

    getVeiculo() {
        VehicleService.getVehicle().then(
            (response) =>
                this.setState({ veiculos: response.data })
        ).catch(error => {
            console.log('Deu erro: ', error);
        });
    }

    voltar() {
        this.props.history.push("/");
    }

    render() {
        return (
            <Container>
                <Row>
                    <h1>Listagem de Veículos</h1>
                </Row>
                <Row>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Placa</th>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Ano</th>
                                <th>Cor</th>
                                <th>Combustivel</th>
                                <th>Deletar/Atualizar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.veiculos.map(
                                    veiculo =>
                                        <tr key={veiculo.id_veiculo}>
                                            <td>
                                                {veiculo.id_veiculo}
                                            </td>
                                            <td>
                                                {veiculo.placa}
                                            </td>
                                            <td>
                                                {veiculo.marca}
                                            </td>
                                            <td>
                                                {veiculo.modelo}
                                            </td>
                                            <td>
                                                {veiculo.ano}
                                            </td>
                                            <td>
                                                {veiculo.cor}
                                            </td>
                                            <td>
                                                {veiculo.combustivel}
                                            </td>
                                            <td>
                                                <Button variant="danger mx-2" onClick="">Deletar</Button>
                                                <Button variant="warning" onClick="">Atualizar</Button>
                                            </td>
                                        </tr>
                                )

                            }
                        </tbody>
                    </Table>

                </Row>
                
                <Row>
                    <Col sm={10}>
                        <Button className="float-left" variant="primary" onClick={this.voltar}>Voltar</Button>
                    </Col>
                    <Col sm={2}>
                        <Button className="float-right" variant="success" onClick="">Novo Veículo</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ListaVeiculo;