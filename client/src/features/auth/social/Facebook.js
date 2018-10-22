import React, {Component} from 'react';
import {FacebookLoginButton} from 'react-social-login-buttons';
import FacebookLogin
  from 'react-facebook-login/dist/facebook-login-render-props';

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
  };

  responseFacebook = (response) => {
    console.log(response);
  };

  componentClicked = () => console.log('clicked');
  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
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
      fbContent = (
        <FacebookLogin
          appId="716882855344485"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook}
          render={(renderProps) => (
            <FacebookLoginButton onClick={renderProps.onClick} />
          )}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}
