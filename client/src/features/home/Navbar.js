import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Responsive, Image } from "semantic-ui-react";
import { default as Sidebar } from "../dashboard/Sidebar";

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "5em" }}>{children}</Container>
);

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
  // {
  //   as: Link,
  //   to: '/dashboard/transacciones',
  //   content: 'Transacciones',
  //   key: 'transacciones', name: ''
  // },
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

const rightItems = user => {
  let normal = [
    { as: Link, to: "/ingreso", content: "Ingreso", key: "ingreso" },
    { as: Link, to: "/registro", content: "Registro", key: "registro" }
  ];
  let loggedin;
  if (user) {
    // let userImg = ({url})=> {
    //
    // }
    loggedin = [
      {
        as: Link,
        to: "/perfil",
        content: user.nombre,
        key: "perfil",
        children:  <Image  src={user.img} alt="user-img" avatar />
      },
      { as: Link, to: "/", content: "Salir", key: "salir" }
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
    const { children, user } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive>
          <Sidebar
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems(user)}
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

const mapStateToProps = state => {
  return {
    user: state.authService.loginSuccess
  };
};

export default connect(mapStateToProps)(NavBar);
