import React from "react";
import { connect } from "react-redux";
import { logout } from "../../services/redux/actions/authActions";
import { Divider, Message, Segment, Modal } from "semantic-ui-react";
import {
  SettingsPane,
  SettingsPage,
  SettingsContent,
  SettingsMenu
} from "react-settings-pane";
import "./styles/styles.css";
import "./styles/bootstrap.min.css";
import API from "../../services/api";

import { createBrowserHistory } from "history";

const history = createBrowserHistory({
  basename: "/"
});

const back = () => {
  history.goBack();
};

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    // Save settings after close
    this._leavePaneHandler = async (
      wasSaved,
      newSettings,
      oldSettings,
      user
    ) => {
      // "wasSaved" indicates wheather the pane was just closed or the save button was clicked.
      if (wasSaved && newSettings !== oldSettings) {
        // do something with the settings, e.g. save via ajax.
        user = newSettings;
        //this.setState(newSettings);
        let res = await API.User.update({ user });
        if (res.ok) {
          console.log("success saving new settings");
        }

        console.log("update user profile");
      }
      this.closeModal();
    };

    // React if a single setting changed
    this._settingsChanged = (e, data) => {
      if (data) {
        this.props.setFieldValue(data.name, data.value);
      }
    };

    // Define your menu
    this._menu = [
      {
        title: "General", // Title that is displayed as text in the menu
        url: "/settings/general" // Identifier (url-slug)
      },
      // {
      //   title: "Profile",
      //   url: "/settings/profile"
      // },
      {
        title: "Account",
        url: "/settings/account"
      },
      {
        title: "About Us",
        url: "/settings/about"
      }
    ];
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
    //back to last page
    back();
  };

  //Delete user account

  deleteAccount = async () => {
    if (this.props.userHasLoggedin) {
      let userID = this.props.userHasLoggedin._id;
      await API.User.delete(userID);
      this.props.logoutRequest(userID);
    }
  };

  render() {
    let name = this.props.userHasLoggedin.name;
    let email = this.props.userHasLoggedin.email;
    let password = "";
    // Return your Settings Pane
    return (
      <Modal
        id="profileModal"
        open={this.state.modalIsOpen}
        onOpen={this.openModal}
        onClose={this.closeModal}
        closeIcon
        closeOnDocumentClick
        centered
        style={{
          display: "block",
          marginTop: "auto",
          marginBottom: "auto",
          marginLeft: "auto",
          marginRight: "auto",
          height: "569px"
        }}
        dimmer={"blurring"}
      >
        <SettingsPane
          items={this._menu}
          index="/settings/general"
          onChange={this._settingsChanged}
          onPaneLeave={this._leavePaneHandler}
        >
          <SettingsMenu headline="Settings" />
          <SettingsContent header>
            <SettingsPage handler="/settings/general">
              <div className="profile-image">
                <img
                  src={this.props.userHasLoggedin.img}
                  alt="profilePicture"
                  width="100"
                  height="100"
                  style={{
                    display: "block",
                    borderRadius: "50%",
                    marginRight: "auto",
                    marginLeft: "auto"
                  }}
                />
              </div>

              <fieldset className="form-group">
                <label htmlFor="generalName">Name: </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  placeholder="Name"
                  id="generalName"
                  onChange={this._settingsChanged}
                  // defaultValue={name}
                />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="generalMail">E-Mail address: </label>
                <input
                  type="text"
                  disabled
                  className="form-control"
                  name="email"
                  value={email}
                  placeholder="E-Mail Address"
                  id="generalMail"
                  onChange={this._settingsChanged}
                  // defaultValue={email}
                />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="changeAccountPassword">Change password: </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  placeholder="Enter Password"
                  onChange={this._settingsChanged}
                />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="verifyChangePassword">Verify Password: </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Verify Password"
                  onChange={this._settingsChanged}
                />
              </fieldset>
            </SettingsPage>
            <SettingsPage handler="/settings/account">
              <div>
                <Message>
                  <Message.Header>About Deleting your Account</Message.Header>
                  <p>
                    This section is critical. Here you can delete your account,
                    which means deleting all your account information and
                    settings. <strong>THIS CAN'T BE UNDONE</strong>
                  </p>
                </Message>
                <Divider />
                <button
                  id="deleteAccountBtn"
                  className="btn btn-danger"
                  onClick={this.deleteAccount}
                >
                  <strong>Delete Account</strong>
                </button>
              </div>
            </SettingsPage>
            <SettingsPage handler="/settings/about">
              <div>
                <Segment>
                  <p>
                    We are a group of Systems Engineer students from Universidad
                    del Valle, Cali, Colombia. This application is part of a
                    project for the Software Development class 2018-2.
                    <br />
                    Feel free to check our GitHub Repo{" "}
                    <a
                      href="https://github.com/andresfelipe9619/bugs-money"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>
                  </p>
                </Segment>
              </div>
            </SettingsPage>
          </SettingsContent>
        </SettingsPane>
      </Modal>
    );
  }

  componentDidMount() {
    this.openModal();
  }
}

const mapStateToProps = state => ({
  userHasLoggedin: state.authService.loginSuccess
});

const mapDispatchToProps = dispatch => ({
  logoutRequest: user => {
    user ? dispatch(logout(user)) : console.log("No user to logout");
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
