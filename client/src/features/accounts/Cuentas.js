import React, { Component } from 'react';
//import AgregarFormularioCuenta from './Componente/AgregarFormularioCuenta';
import FormularioCuenta from './Componente/FormularioCuenta';
import DataTable from '../dashboard/DataTable';
import './Css/index.css';
import {
    Form,
    Button,
    Message,
    Grid,
    Header,
    Segment
} from "semantic-ui-react";

class Cuentas extends Component {

    render() {
        return (
            <Grid style={{ height: "100%" }}
                verticalAlign="middle"  >
                <Grid.Row>
                    <FormularioCuenta />
                    <Grid.Column width={10} style={{ paddingTop: "2em", maxWidth: 450 }}>
                        <Header as="h2" color="black" textAlign="center">
                            TUS CUENTAS BANCARIAS
                    </Header>
                   <DataTable data={[
                            {
                                id: 1078207,
                                name: "Billetera",
                                bank: "Other",
                                balance: 3000000,
                                currency: "USD"
                            },
                            {
                                id: 1078208,
                                name: "Mastercard",
                                bank: "Other",
                                balance: 0,
                                currency: "USD"
                            }
                        ]} /></Grid.Column>

                </Grid.Row>
            </Grid>
        );
    }
}

export default Cuentas;