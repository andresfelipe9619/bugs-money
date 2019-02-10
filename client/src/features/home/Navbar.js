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
  // <div className="main_div" style={{ marginTop: "4em" }}>
  //   {children}
  // </div>
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
  { as: Link, to: "/", content: "Inicio", key: "inicio", name: "home" },
  { as: Link, to: "/perfil", content: "Perfil", key: "perfil", name: "user" },
  {
    as: Link,
    to: "/dashboard/presupuesto",
    content: "Presupuesto",
    key: "presupuesto",
    name: "money bill alternate outline"
  },
  {
    as: Link,
    to: "/dashboard/cuentas",
    content: "Cuentas",
    key: "cuentas",
    name: "credit card outline"
  },
  {
    as: Link,
    to: "/dashboard/reportes",
    content: "Reportes",
    key: "reportes",
    name: "line graph"
  }
];

const rightItems = (user, logout) => {
  let normal = [
    { as: Link, to: "/ingreso", content: "Ingreso", key: "ingreso" },
    { as: Link, to: "/registro", content: "Registro", key: "registro" }
  ];
  let loggedin = [];

  if (user) {
    loggedin = [
      {
        as: Link,
        to: "/perfil",
        key: "avatar",
        children: <Avatar name={user.nombre} img={user.img} />
      },
      { content: "Salir", key: "salir", onClick: logout }
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
        {/* <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive> */}
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
