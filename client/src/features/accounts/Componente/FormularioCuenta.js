import React from "react";
import {
    Form,
    Button,
    Message,
    Grid,
    Header,
    Segment
} from "semantic-ui-react";
import { connect } from "react-redux";
import withSemanticUIFormik from "../../../features/login/hoc/FormikSUI";
import * as Yup from "yup";
import { Select } from 'semantic-ui-react';


const MyInnerForm = props => {
    const {
        errors,
        handleChange,
        handleSubmit,
        registerHasFailed,

    } = props;
    const NaturalAcuountOptions = [{ icon: 'paypal card', value: 'CuentaDeito', text: 'CuentaDebito' },
    { icon: 'cc mastercard', value: 'CuentaCredito', text: 'CuentaCredito' }]


    return (
        
            <Grid.Row >
                <Grid.Column width={6} style={{ paddingTop: "2em", maxWidth: 450 }}>
                    <Header as="h2" color="black" textAlign="center">
                        Crea tu cuenta Bancaria
                    </Header>
                    <Segment stacked>
                        {Object.keys(errors).length > 0 ? (
                            <Message
                                error
                                header="Hay porblemas el ingreso"
                                list={Object.keys(errors).map(key => errors[key])}
                            />
                        ) : registerHasFailed ? (
                            <Message
                                error
                                header="Hay problemas con el inicio de sesion"
                                content={
                                    "err" in registerHasFailed
                                        ? registerHasFailed.err.message
                                        : registerHasFailed
                                }
                            />
                        ) : null}
                        <Form size="large" onSubmit={handleSubmit}>
                            <Form.Input
                                label="Nombre de Cuenta"
                                labelPosition="left"
                                fluid
                                icon="credit card alternative"
                                type="text"
                                name="name"
                                iconPosition="left"
                                placeholder="Nombre de cuenta..."
                                onChange={handleChange}
                            />
                            <Form.Select
                                label="Naturaleza de cuenta"
                                labelPosition="left"
                                fluid
                                placeholder='selecciona un tipo de cuenta'
                                options={NaturalAcuountOptions}
                                onChange={handleChange}
                            />
                            <Form.Input
                                label="Numero de cuenta"
                                labelPosition="left"
                                type="Number"
                                fluid
                                icon="numbered list"
                                iconPosition="left"
                                name="Numero_de_cuenta"
                                placeholder="escribe tu numero de cuenta..."
                                onChange={handleChange}
                            />
                            <Form.Input
                                label="Valor que posee la cuenta"
                                labelPosition="left"
                                type="Number"
                                fluid
                                icon="numbered list"
                                iconPosition="left"
                                name="Valor_de_la_cuenta"
                                placeholder="escribe el valor de tu cuenta..."
                                onChange={handleChange}
                            />

                            <Button
                                id="submit-login"
                                type="submit"
                                style={{ width: "100%", height: "auto" }}
                            >
                                CrearTUCuenta
                            </Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        
    );
};



export default (
    withSemanticUIFormik({
        mapPropsToValues: () => ({ email: "", name: "", password: "" }),
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email("Correo invalido")
                .required("Correo es requerido!"),
            password: Yup.string()
                .min(6)
                .required("Contraseña es requerido!"),
            passwordConfirm: Yup.string()
                .oneOf([Yup.ref("password"), null])
                .required("Confirmacion de contaseña es requerido!")
        }),
        handleSubmit: (values, { setSubmitting, props }) => {
            let { name, email, password } = values;
            setTimeout(() => {
                props.registerRequest({
                    email,
                    password,
                    nombre: name,
                    estado: true,
                    google: false,
                    role: "USER_ROLE"
                });
                setSubmitting(false);
            }, 1000);
        },
        displayName: "RegisterForm"
    })(MyInnerForm)
);
