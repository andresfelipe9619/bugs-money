import React, { Component } from "react";
import GoogleLoginButton from "react-google-login-button";
export default class Google extends Component {
  render() {
    return (
      <GoogleLoginButton
        googleClientId="27487158293-89imhaa5mf45o0o0jvje4lut3rk0lq1u.apps.googleusercontent.com"
        onLoginSuccess={this.props.onLoginSuccess}
        // onLoginSuccess={googleUser => {
        //   console.log("Replace this function to start using this information");
        //   console.log("User ID:", googleUser.getBasicProfile().getId());
        //   console.log("User Name:", googleUser.getBasicProfile().getName());
        //   console.log(
        //     "User Image:",
        //     googleUser.getBasicProfile().getImageUrl()
        //   );
        //   console.log("User Email:", googleUser.getBasicProfile().getEmail());
        //   console.log("ID token:", googleUser.getAuthResponse().id_token);
        // }}
        onLoginFailure={() => console.log("Login failed")}
        width={378}
        height={48}
        longTitle={true}
        theme="light"
      />
    );
  }
}
