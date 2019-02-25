import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
export default class Google extends Component {
  render() {
    return (
      <GoogleLogin
        clientId="27487158293-89imhaa5mf45o0o0jvje4lut3rk0lq1u.apps.googleusercontent.com"
        buttonText="Google"
        style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        onSuccess={googleUser => {
          let user = {
            id: googleUser.getBasicProfile().getId(),
            name: googleUser.getBasicProfile().getName(),
            email: googleUser.getBasicProfile().getEmail(),
            img: googleUser.getBasicProfile().getImageUrl(),
            idtoken: googleUser.getAuthResponse().id_token
          };
          this.props.onLoginSuccess(user);
        }}
        onFailure={err => console.log("Login failed", err)}
      />
    );
  }
}
