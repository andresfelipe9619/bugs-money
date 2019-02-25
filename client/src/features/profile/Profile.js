import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
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

const history = createBrowserHistory();

const back = () => {
  history.goBack();
};

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);

    // You will maybe receive your settings from this.props or do a fetch request in your componentWillMount
    this.state = {
      modalIsOpen: false,
      //Example of how fetch data should look
      generalName: this.props.userHasLoggedin.name,
      generalEmail: this.props.userHasLoggedin.email,
      generalPicture: this.props.userHasLoggedin.img
    };

    // Save settings after close
    this._leavePaneHandler = async (wasSaved, newSettings, oldSettings) => {
      let userId = this.props.userHasLoggedin._id;
      // "wasSaved" indicates wheather the pane was just closed or the save button was clicked.
      if (wasSaved && newSettings !== oldSettings) {
        // do something with the settings, e.g. save via ajax.

        this.setState(newSettings);
        let res = await API.User.update({ userId, ...newSettings });
        if (res.ok) {
          console.log("success saving new settings");
        }

        console.log("update user profile");
      }
      this.closeModal();
    };

    // React if a single setting changed
    this._settingsChanged = ev => {};

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
    //back to last page after closing modal
    back();
  };

  //Delete user account

  deleteAccount = async () => {
    if (this.props.userHasLoggedin) {
      let userID = this.props.userHasLoggedin._id;
      await API.User.delete(userID);
      return (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      );
    }
  };

  render() {
    // Get settings
    let settings = this.state;

    // Return your Settings Pane
    return (
      <Modal
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
          settings={settings}
          onChange={this._settingsChanged}
          onPaneLeave={this._leavePaneHandler}
        >
          <SettingsMenu headline="Settings" />
          <SettingsContent header>
            <SettingsPage handler="/settings/general">
              <div className="profile-image">
                <img
                  src={settings["generalPicture"]}
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
                  name="mysettings.general.name"
                  placeholder="Name"
                  id="generalName"
                  onChange={this._settingsChanged}
                  defaultValue={settings["generalName"]}
                />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="generalMail">E-Mail address: </label>
                <input
                  type="text"
                  className="form-control"
                  name="mysettings.general.email"
                  placeholder="E-Mail Address"
                  id="generalMail"
                  onChange={this._settingsChanged}
                  defaultValue={settings["generalEmail"]}
                />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="changeAccountPassword">Change password: </label>
                <input
                  type="password"
                  className="form-control"
                  name="mysettings.general.email"
                  placeholder="Enter Password"
                  id="generalMail"
                  onChange={this._settingsChanged}
                />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="verifyChangePassword">Verify Password: </label>
                <input
                  type="password"
                  className="form-control"
                  name="mysettings.general.email"
                  placeholder="Verify Password"
                  id="generalMail"
                  onChange={this._settingsChanged}
                />
              </fieldset>
              {/* <fieldset className="form-group">
                <label htmlFor="generalPic">Picture: </label>
                <input
                  type="text"
                  className="form-control"
                  name="mysettings.general.picture"
                  placeholder="Picture"
                  id="generalPic"
                  onChange={this._settingsChanged}
                  defaultValue={settings["mysettings.general.picture"]}
                />
              </fieldset> */}
            </SettingsPage>

            {/* <SettingsPage handler="/settings/profile">
              <fieldset className="form-group">
                <label htmlFor="profileFirstname">Firstname: </label>
                <input
                  type="text"
                  className="form-control"
                  name="mysettings.profile.firstname"
                  placeholder="Firstname"
                  id="profileFirstname"
                  onChange={this._settingsChanged}
                  defaultValue={settings["mysettings.profile.firstname"]}
                />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="profileLastname">Lastname: </label>
                <input
                  type="text"
                  className="form-control"
                  name="mysettings.profile.lastname"
                  placeholder="Lastname"
                  id="profileLastname"
                  onChange={this._settingsChanged}
                  defaultValue={settings["mysettings.profile.lastname"]}
                />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="profileUsername">Username: </label>
                <div className="input-group">
                  <span className="input-group-addon" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    name="mysettings.profile.username"
                    className="form-control"
                    placeholder="Username"
                    aria-describedby="basic-addon1"
                    onChange={this._settingsChanged}
                    defaultValue={settings["mysettings.profile.username"]}
                  />
                </div>
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="profileBiography">Biography: </label>
                <textarea
                  className="form-control"
                  name="mysettings.profile.biography"
                  placeholder="Biography"
                  id="profileBiography"
                  onChange={this._settingsChanged}
                  defaultValue={settings["mysettings.profile.biography"]}
                />
              </fieldset>
            </SettingsPage> */}
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

export default connect(
  mapStateToProps,
  null
)(Profile);
