import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Responsive, Image } from "semantic-ui-react";
import { default as Sidebar } from "../dashboard/Sidebar";
import king from "../../assets/images/king_icon.png";
import { logout } from "../../services/redux/actions/authActions";
import "./styles/navbar.css";

const NavBarChildren = ({ children }) => (
  <div style={{ marginTop: "4em" }}>{children}</div>
);

const Avatar = ({ name, img }) => {
  return (
    <div>
      <Image src={img ? img : king} alt="user-img" avatar />
      <span>{name}</span>
    </div>
  );
};

const leftItems = [
  { as: Link, to: "/", content: "Home", key: "home", name: "home" },
  {
    as: Link,
    to: "/profile",
    content: "Profile",
    key: "profile",
    name: "user"
  },
  {
    as: Link,
    to: "/dashboard/budgets",
    content: "Budgets",
    key: "budgets",
    name: "money bill alternate outline"
  },
  {
    as: Link,
    to: "/dashboard/accounts",
    content: "Accounts",
    key: "accounts",
    name: "credit card outline"
  },
  {
    as: Link,
    to: "/dashboard/reports",
    content: "Reports",
    key: "reports",
    name: "line graph"
  }
];

const rightItems = (user, logout) => {
  let normal = [
    { as: Link, to: "/login", content: "Login", key: "login" },
    { as: Link, to: "/register", content: "Register", key: "register" }
  ];
  let loggedin = [];

  if (user) {
    loggedin = [
      {
        as: Link,
        to: "/profile",
        key: "avatar",
        children: <Avatar name={user.name} img={user.img} />
      },
      { content: "Logout", key: "logout", onClick: logout }
    ];
  }

  return {
    normal,
    loggedin
  };
};

class NavBar extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, user, logout } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive>
          <Sidebar
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems(user, logout)}
            visible={visible}
            isLoggedin={user}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </Sidebar>
        </Responsive>
      </div>
    );
  }
}

const mapState = state => {
  return {
    user: state.authService.loginSuccess
  };
};

const mapDispatch = dispatch => {
  return {
    logoutRequest: user => {
      user ? dispatch(logout(user)) : console.log("No user to logout");
    }
  };
};
export default connect(
  mapState,
  mapDispatch
)(NavBar);
