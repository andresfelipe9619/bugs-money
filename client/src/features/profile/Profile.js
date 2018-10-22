import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { profilePageLoaded } from "./redux/actions";
import {
  SettingsPane,
  SettingsPage,
  SettingsContent,
  SettingsMenu
} from "react-settings-pane";
import "./styles/styles.css";
import "./styles/bootstrap.min.css";
// import {
//   Segment,
//   Container,
//   Grid,
//   Header,
//   Label,
//   Input
// } from "semantic-ui-react";
export class Profile extends Component {
  static propTypes = {
    prop: PropTypes
  };

  constructor(props) {
    super(props);

    // You will maybe receive your settings from this.props or do a fetch request in your componentWillMount
    // but here is an example of how it should look like:
    this.state = {
      "mysettings.general.name": "Johan Sebastián Hernández",
      "mysettings.general.username": "jseb2520",
      "mysettings.general.color-theme": "black",
      "mysettings.general.email": "johanseb2520@gmail.com",
      "mysettings.general.picture": "earth",
      "mysettings.profile.firstname": "Johan Sebastián",
      "mysettings.profile.lastname": "Hernández"
    };

    // Save settings after close
    this._leavePaneHandler = (wasSaved, newSettings, oldSettings) => {
      // "wasSaved" indicates wheather the pane was just closed or the save button was clicked.

      if (wasSaved && newSettings !== oldSettings) {
        // do something with the settings, e.g. save via ajax.
        this.setState(newSettings);
      }

      this.hidePrefs();
    };

    // React if a single setting changed
    this._settingsChanged = ev => {};

    // Define your menu
    this._menu = [
      {
        title: "General", // Title that is displayed as text in the menu
        url: "/settings/general" // Identifier (url-slug)
      },
      {
        title: "Profile",
        url: "/settings/profile"
      },
      {
        title: "Notifications",
        url: "/settings/notifications"
      },
      {
        title: "Language",
        url: "/settings/language"
      },
      {
        title: "Appearance",
        url: "/settings/appearance"
      },
      {
        title: "Plugins",
        url: "/settings/plugins"
      },
      {
        title: "About",
        url: "/settings/about"
      }
    ];
  }

  hidePrefs() {
    this.prefs.className = "md-modal";
    this.overlay.style.visibility = "";
  }

  showPrefs() {
    this.prefs.className = "md-modal show";
    this.overlay.style.visibility = "visible";
  }

  render() {
    // Get settings
    let settings = this.state;

    // Define one of your Settings pages
    /*
     const dynamicOptionsForGeneralPage = [
       {
         key: null,
         label: 'Account',
         type: 'headline',
       },
       {
         key: 'mysettings.general.email',
         label: 'E-Mail address',
         type: 'text',
       },
       {
         key: 'mysettings.general.password',
         label: 'Password',
         type: 'password',
       },
       {
         key: 'mysettings.general.password-repeat',
         label: 'Password repeat',
         type: 'password',
       },
       {
         key: null,
         label: 'Appearance',
         type: 'headline',
       },
       {
         key: 'mysettings.general.color-theme',
         label: 'Color Theme',
         type: 'custom',
         component: <select><option value="blue">Blue</option><option value="red">Red</option></select>,
       }
     ];*/

    // Then use with:
    // <SettingsPage handler="/settings/general" options={dynamicOptionsForGeneralPage} />

    // Return your Settings Pane
    return (
      <div>
        <div className="page-header">
          <h1>
            Configuración <small>Example</small>
          </h1>
        </div>
        <div style={{ margin: "30px 0 90px 0" }}>
          <button
            onClick={this.showPrefs.bind(this)}
            className="btn btn-default"
          >
            Show Preferences
          </button>
        </div>
        <div>
          <h4>Result</h4>
          <pre className="well">{JSON.stringify(settings, null, 4)}</pre>
        </div>
        <div ref={ref => (this.overlay = ref)} className="overlay" />

        <div ref={ref => (this.prefs = ref)} className="md-modal">
          <SettingsPane
            items={this._menu}
            index="/settings/general"
            settings={settings}
            onChange={this._settingsChanged}
            onPaneLeave={this._leavePaneHandler}
          >
            <SettingsMenu headline="General Settings" />
            <SettingsContent header>
              <SettingsPage handler="/settings/general">
                <fieldset className="form-group">
                  <label htmlFor="generalName">Name: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="mysettings.general.name"
                    placeholder="Name"
                    id="generalName"
                    onChange={this._settingsChanged}
                    defaultValue={settings["mysettings.general.name"]}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label htmlFor="generalUsername">Username: </label>
                  <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">
                      @
                    </span>
                    <input
                      type="text"
                      name="mysettings.general.username"
                      className="form-control"
                      placeholder="Username"
                      aria-describedby="basic-addon1"
                      onChange={this._settingsChanged}
                      defaultValue={settings["mysettings.general.username"]}
                    />
                  </div>
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
                    defaultValue={settings["mysettings.general.email"]}
                  />
                </fieldset>
                <fieldset className="form-group">
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
                </fieldset>
                <fieldset className="form-group">
                  <label htmlFor="profileColor">Color-Theme: </label>
                  <select
                    name="mysettings.general.color-theme"
                    id="profileColor"
                    className="form-control"
                    defaultValue={settings["mysettings.general.color-theme"]}
                  >
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="purple">Purple</option>
                    <option value="orange">Orange</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                  </select>
                </fieldset>
              </SettingsPage>
              <SettingsPage handler="/settings/profile">
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
              </SettingsPage>
            </SettingsContent>
          </SettingsPane>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.profilePageLoaded(true);
  }

  componentWillUnmount() {
    this.props.profilePageLoaded(false);
  }

  // return (
  //   <Container>
  //     <Grid
  //       divided="vertically"
  //       style={{
  //         marginTop: "7em"
  //       }}
  //     >
  //       <Grid.Row>
  //         <Grid.Column>

  //         </Grid.Column>

  //         <Grid.Column>
  //           <Header as="h3" textAlign="left">
  //             Opciones de Usuario:
  //           </Header>
  //           <Segment>

  //           </Segment>
  //         </Grid.Column>
  //       </Grid.Row>
  //     </Grid>
  //   </Container>
  // );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    profilePageLoaded: bool => {
      dispatch(profilePageLoaded(bool));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
