import React, {Component} from 'react';
import {
  Segment,
  Loader,
  Dimmer,
  Form,
  Grid,
  Button,
  Header,
} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';
import Facebook from './social/Facebook';
import {GoogleLoginButton} from 'react-social-login-buttons';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        valid: false,
        inputs: {
          email: {valid: true, msg: 'El correo debe ser valido'},
        },
      },
      email: '',
      pwd: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if ([e.target.name] === 'email') {
      let patron = /\w+/;

      if ([e.target.value] === '' || patron.test([e.target.value])) {
        this.setState({
          [e.target.name]: e.target.value,
          errors: {
            inputs: {
              ...this.state.errors.inputs,
              email: {...this.state.errors.inputs.email, valid: true},
            },
          },
        });
      } else {
        this.setState({
          [e.target.name]: e.target.value,
          errors: {
            inputs: {
              ...this.state.errors.inputs,
              email: {...this.state.errors.inputs.email, valid: false},
            },
          },
        });
      }
    } else if ([e.target.name] === 'pwd') {
      let patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

      if ([e.target.value] === '' || patron.test([e.target.value])) {
        this.setState({
          [e.target.name]: e.target.value,
          errors: {
            inputs: {
              ...this.state.errors.inputs,
              pwd: {...this.state.errors.inputs.pwd, valid: true},
            },
          },
        });
      } else {
        this.setState({
          [e.target.name]: e.target.value,
          errors: {
            inputs: {
              ...this.state.errors.inputs,
              pwd: {...this.state.errors.inputs.pwd, valid: false},
            },
          },
        });
      }
    } else if ([e.target.name] === 'pwd') {
      let patron = this.state.pwd[0];

      if ([e.target.value] === '' || [e.target.value] === patron) {
        this.setState({
          [e.target.name]: e.target.value,
          errors: {
            inputs: {
              ...this.state.errors.inputs,
              pwdr: {...this.state.errors.inputs.pwdr, valid: true},
            },
          },
        });
      } else {
        this.setState({
          [e.target.name]: [e.target.value],
          errors: {
            inputs: {
              ...this.state.errors.inputs,
              pwdr: {...this.state.errors.inputs.pwdr, valid: false},
            },
          },
        });
      }
    } else {
      this.setState({
        [e.target.name]: [e.target.value],
      });
    }
  }

  handleSubmit() {}

  // componentDidMount() {
  //   this.props.loadPage();
  // }

  render() {
    if (this.props.isLoading) {
      return (
        <Segment
          style={{
            marginTop: '7em',
            height: '20em',
          }}
        >
          <Dimmer inverted active>
            <Loader size="big">Loading</Loader>
          </Dimmer>
        </Segment>
      );
    } else if (this.props.loginSuccess) {
      return <Redirect to="/dashboard" />;
    } else {
      return (
        <Grid
          textAlign="center"
          style={{
            height: '100%',
          }}
          verticalAlign="middle"
        >
          <Grid.Column width={6} style={{paddingTop: '2em'}}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                label="Correo Electrónico"
                required
                fluid
                icon="user"
                type="email"
                name="email"
                iconPosition="left"
                placeholder="Ingresa tu correo electrónico..."
                value={this.state.email}
                onChange={this.handleChange}
              />
              <Form.Input
                label="Contraseña"
                type="password"
                required
                fluid
                icon="lock"
                iconPosition="left"
                name="pwd"
                placeholder="Contraseña..."
                value={this.state.pwd}
                onChange={this.handleChange}
              />
              <Button id="submit-login" type="submit">
                Iniciar Sesión
              </Button>
            </Form>
          </Grid.Column>
          <Grid.Row>
            <Header>O puedes Iniciar Sesión con:</Header>
            <br />
          </Grid.Row>
          <Facebook />
          <br />
          <GoogleLoginButton />
        </Grid>
      );
    }
  }
}

// const mapStateToProps = (state) => {
//   return {
//     message: state.auth.loginLoaded,
//     isLoading: state.auth.loginLoading,
//     hasErrored: state.auth.loginErrored,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadPage: () => {
//       dispatch(loadLogin());
//     },
//     errorMessage: () => {
//       dispatch();
//     },
//     successMessage: () => {
//       dispatch();
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export default Login;
