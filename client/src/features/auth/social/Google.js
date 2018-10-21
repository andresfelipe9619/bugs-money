import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import GoogleLoginButton from 'react-google-login/dist/google-login-render-props';
export default class Google extends Component {
  state = {
    isSignedIn: false,
    email: '',
    name: '',
    picture: '',
    userID: '',
  };
  responseGoogle = (response) => {
    console.log(response);
    // this.setState() = {
    //   email: this.response.email,
    //   picture: this.response.imageUrl,
    //   userID: this.response.googleId,
    //   name: this.response.name
    // }
  };
  componentClicked = () => console.log('clicked');
  render() {
    let glContent;

    if (this.state.isLoggedIn) {
      glContent = (
        <div
          style={{
            width: '400px',
            margin: 'auto',
            background: '#f4f4f4',
            padding: '20px',
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      );
    } else {
      glContent = (
        <GoogleLogin
          clientId="654491791021-umv4luk94q6ptqmnj9vhrobearb3ti0l.apps.googleusercontent.com"
          autoLoad={false}
          buttonText="Google"
          fields="name,email,picture"
          callback={this.responseGoogle}
          render={(renderProps) => (
            <GoogleLoginButton onClick={renderProps.onClick} />
          )}
        />
      );
    }
    return <div>{glContent}</div>;
  }
}
