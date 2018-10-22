import React, {Component} from 'react';
import GoogleLoginButton from 'react-google-login-button'

//import GoogleLogin from 'react-google-login';
export default class Google extends Component {
  // responseGoogle = (response) => {
  //   console.log(response);
  //   // this.setState() = {
  //   //   email: this.response.email,
  //   //   picture: this.response.imageUrl,
  //   //   userID: this.response.googleId,
  //   //   name: this.response.name
  //   // }
  // };
  // componentClicked = () => console.log('clicked');

  render() {
    return (
      <GoogleLoginButton
        googleClientId='27487158293-89imhaa5mf45o0o0jvje4lut3rk0lq1u.apps.googleusercontent.com'
        onLoginSuccess={(googleUser) => {
          console.log('Replace this function to start using this information');
          console.log('Google User:', googleUser.getBasicProfile());
          console.log('ID token:', googleUser.getAuthResponse().id_token);
        }}
        onLoginFailure={() => console.log('Login failed')}
        width={225}
        height={54}
        longTitle={true}
        theme="light"
      />    
    );
  }
  
  // render() {
  //   let glContent;

  //   if (this.state.isLoggedIn) {
  //     glContent = (
  //       <div
  //         style={{
  //           width: '400px',
  //           margin: 'auto',
  //           background: '#f4f4f4',
  //           padding: '20px',
  //         }}
  //       >
  //         <img src={this.state.picture} alt={this.state.name} />
  //         <h2>Welcome {this.state.name}</h2>
  //         Email: {this.state.email}
  //       </div>
  //     );
  //   } else {
  //     glContent = (
  //       <GoogleLogin
  //         clientId="27487158293-89imhaa5mf45o0o0jvje4lut3rk0lq1u.apps.googleusercontent.com"
  //         autoLoad={false}
  //         callback={this.responseGoogle}
  //       />
  //     );
  //   }
  //   return <div>{glContent}</div>;
  // }
}
