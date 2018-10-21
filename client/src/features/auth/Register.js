// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {Button, Checkbox, Form, Grid} from 'semantic-ui-react';
// import {loadRegister, register} from '../../actions/registerActions';
// import {alertError, alertSuccess} from '../../actions/alertActions';
// import {Redirect, Link} from 'react-router-dom';
// import AlertMsg from './AlertMsg';

// import {Header, Message, Segment, Loader, Dimmer} from 'semantic-ui-react';
// class Register extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       errors: {
//         valid: false,
//         inputs: {
//           nit: {
//             valid: true,
//             msg: 'Ingrese un nit valido y legal de formato 991.xxx.xxx',
//           },
//           nombre: {valid: true, msg: 'El nombre de usuario es obligatorio'},
//           email: {valid: true, msg: 'El correo debe ser valido'},
//           cc: {
//             valid: true,
//             msg:
//               'La ubicacion debe tener la ubicacion validad del local o establecimiento',
//           },
//           pwd: {
//             valid: true,
//             msg:
//               'La Contrasena debe tener mas de 7 caracteres, almenos una mayuscula y un minuscula',
//           },
//           pwdr: {valid: true, msg: 'Las Contrasenas deben coincidir'},
//         },
//       },
//       nit: '',
//       nombre: '',
//       email: '',
//       cc: '',
//       pwd: '',
//       pwdr: '',
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e) {
//     if ([e.target.name] == 'nit') {
//       let patron = /^[0-9\b]+$/;
//       if (
//         [e.target.value] == '' ||
//         (patron.test([e.target.value]) &&
//           ([e.target.value].toString().length > 6 &&
//             [e.target.value].toString().length < 10))
//       ) {
//         this.setState({
//           [e.target.name]: [e.target.value],
//           errors: {
//             inputs: {
//               ...this.state.errors.inputs,
//               nit: {...this.state.errors.inputs.nit, valid: true},
//             },
//           },
//         });
//       } else if (
//         patron.test([e.target.value]) &&
//         [e.target.value].toString().length < 9
//       ) {
//         this.setState({
//           [e.target.name]: [e.target.value],
//           errors: {
//             inputs: {
//               ...this.state.errors.inputs,
//               nit: {...this.state.errors.inputs.nit, valid: false},
//             },
//           },
//         });
//         // this.setState({mErrors:[...this.state.mErrors, this.state.errors.inputs.nit.msg]})
//         // this.props.showErrorMessage(this.state.mErrors)
//       }
//     } else if ([e.target.name] == 'email') {
//       let patron = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//       if ([e.target.value] == '' || patron.test([e.target.value])) {
//         this.setState({
//           [e.target.name]: e.target.value,
//           errors: {
//             inputs: {
//               ...this.state.errors.inputs,
//               email: {...this.state.errors.inputs.email, valid: true},
//             },
//           },
//         });
//       } else {
//         this.setState({
//           [e.target.name]: e.target.value,
//           errors: {
//             inputs: {
//               ...this.state.errors.inputs,
//               email: {...this.state.errors.inputs.email, valid: false},
//             },
//           },
//         });
//       }
//     } else if ([e.target.name] == 'pwd') {
//       let patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

//       if ([e.target.value] == '' || patron.test([e.target.value])) {
//         this.setState({
//           [e.target.name]: e.target.value,
//           errors: {
//             inputs: {
//               ...this.state.errors.inputs,
//               pwd: {...this.state.errors.inputs.pwd, valid: true},
//             },
//           },
//         });
//       } else {
//         this.setState({
//           [e.target.name]: e.target.value,
//           errors: {
//             inputs: {
//               ...this.state.errors.inputs,
//               pwd: {...this.state.errors.inputs.pwd, valid: false},
//             },
//           },
//         });
//       }
//     } else if ([e.target.name] == 'pwdr') {
//       let patron = this.state.pwd[0];

//       if ([e.target.value] == '' || [e.target.value] === patron) {
//         this.setState({
//           [e.target.name]: e.target.value,
//           errors: {
//             inputs: {
//               ...this.state.errors.inputs,
//               pwdr: {...this.state.errors.inputs.pwdr, valid: true},
//             },
//           },
//         });
//       } else {
//         this.setState({
//           [e.target.name]: [e.target.value],
//           errors: {
//             inputs: {
//               ...this.state.errors.inputs,
//               pwdr: {...this.state.errors.inputs.pwdr, valid: false},
//             },
//           },
//         });
//       }
//     } else {
//       this.setState({
//         [e.target.name]: [e.target.value],
//       });
//     }
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const {nombre, email, nit, cc, pwd} = this.state;
//     const user = {nit, nombre, email, cc, pwd};
//     this.props.requestRegister(user);
//   }

//   render() {
//     if (this.props.hasErrored) {
//       return <h1>Error</h1>;
//     } else if (this.props.isLoading) {
//       return (
//         <Segment
//           style={{
//             marginTop: '7em',
//             height: '20em',
//           }}
//         >
//           <Dimmer inverted active>
//             <Loader size="big">Loading</Loader>
//           </Dimmer>
//         </Segment>
//       );
//     } else if (this.props.registerSuccess) {
//       return <Redirect to="/ingreso" />;
//     } else {
//       return (
//         <Grid
//           // textAlign="center"
//           style={{
//             height: '100%',
//           }}
//           verticalAlign="middle"
//         >
//           <Grid.Column width={6}>
//             <Header as="h1">Registro de Usuario</Header>
//             <Form onSubmit={this.handleSubmit}>
//               <Form.Input
//                 autoFocus
//                 label="Nombre"
//                 required
//                 fluid
//                 icon="user"
//                 iconPosition="left"
//                 name="nombre"
//                 placeholder="ej: Subway"
//                 onChange={this.handleChange}
//                 error={!this.state.errors.inputs.nombre.valid}
//                 value={this.state.nombre}
//               />

//               <Form.Input
//                 label="Correo Electrónico"
//                 required
//                 fluid
//                 icon="user"
//                 type="email"
//                 name="email"
//                 iconPosition="left"
//                 placeholder="ej: micorreo@micorp.com"
//                 onChange={this.handleChange}
//                 value={this.state.email}
//                 error={!this.state.errors.inputs.email.valid}
//               />

//               <Form.Input
//                 label="NIT"
//                 type="text"
//                 required
//                 fluid
//                 icon="user"
//                 iconPosition="left"
//                 name="nit"
//                 placeholder="ej: 1234343311"
//                 onChange={this.handleChange}
//                 value={this.state.nit}
//                 error={!this.state.errors.inputs.nit.valid}
//               />

//               <Form.Input
//                 label="Contrasena"
//                 type="password"
//                 required
//                 fluid
//                 icon="lock"
//                 iconPosition="left"
//                 name="pwd"
//                 placeholder="superFruta12"
//                 onChange={this.handleChange}
//                 value={this.state.pwd}
//                 error={!this.state.errors.inputs.pwd.valid}
//               />

//               <Form.Input
//                 label="Repite Contrasena"
//                 type="password"
//                 required
//                 fluid
//                 icon="lock"
//                 iconPosition="left"
//                 name="pwdr"
//                 placeholder="superFruta12"
//                 onChange={this.handleChange}
//                 value={this.state.pwdr}
//                 error={!this.state.errors.inputs.pwdr.valid}
//               />

//               <Form.Input
//                 label="Ubicacion"
//                 required
//                 fluid
//                 icon="map"
//                 iconPosition="left"
//                 name="cc"
//                 placeholder="ej: Cosmocentro"
//                 onChange={this.handleChange}
//                 value={this.state.cc}
//               />

//               <Form.Field>
//                 <Checkbox
//                   label="Estoy de acuerdo con los terminos y condiciones de servicio"
//                   checked
//                 />
//               </Form.Field>
//               <Button
//                 id="submitRegForm"
//                 type="submit"
//                 style={{
//                   backgroundColor: '#2eb050',
//                 }}
//               >
//                 Submit
//               </Button>
//             </Form>
//           </Grid.Column>
//           <Grid.Column width={6}>
//             {!this.state.errors.valid ? (
//               <AlertMsg
//                 type="warning"
//                 header={'Por favor llene todos los campos'}
//                 msg={`
//             Nit debe ser válido (omitir '-' y numero de validación)
//             `}
//               />
//             ) : null}
//             {!this.state.errors.inputs.email.valid ? (
//               <AlertMsg
//                 header="Error correo"
//                 type="error"
//                 msg={this.state.errors.inputs.email.msg}
//               />
//             ) : null}
//             {!this.state.errors.inputs.nit.valid ? (
//               <AlertMsg
//                 header="Error Nit"
//                 type="error"
//                 msg={this.state.errors.inputs.nit.msg}
//               />
//             ) : null}
//             {!this.state.errors.inputs.pwd.valid ? (
//               <AlertMsg
//                 header="Error Contrasena"
//                 type="error"
//                 msg={this.state.errors.inputs.pwd.msg}
//               />
//             ) : null}
//             {!this.state.errors.inputs.pwdr.valid ? (
//               <AlertMsg
//                 header="Error Contrasena"
//                 type="error"
//                 msg={this.state.errors.inputs.pwdr.msg}
//               />
//             ) : null}
//           </Grid.Column>
//         </Grid>
//       );
//     }
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     message: state.registerReducer.registerLoaded,
//     isLoading: state.registerReducer.registerLoading,
//     hasErrored: state.registerReducer.registerErrored,

//     alertError: state.alertReducer.alertError,
//     registerSuccess: state.registerReducer.registerSuccess,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadPage: () => {
//       dispatch(loadRegister());
//     },
//     requestRegister: (user) => {
//       dispatch(register(user));
//     },
//     showErrorMessage: (msg) => {
//       dispatch(alertError(msg));
//     },
//     showSuccessMessage: (msg) => {
//       dispatch(alertSuccess(msg));
//     },
//   };
// };
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Register);
