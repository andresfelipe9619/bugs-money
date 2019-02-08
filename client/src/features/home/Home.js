import React, { Component } from "react";
import { Container, Header, Divider, Icon, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { homePageLoaded } from "./redux/actions";
import budget_ico from "../../assets/images/king_budget.jpg";
import no_money from "../../assets/images/no_money.jpg";
// import mongoDB from "../../assets/images/MongoDB.jpg";
import mongoDB from "../../assets/images/mongodb.svg";
import "./styles/home.css";
import WOW from "wowjs";
class Home extends Component {
  componentDidMount() {
    this.props.homePageLoaded(true);
    const wow = new WOW.WOW();
    wow.init();
  }

  componentWillUnmount() {
    this.props.homePageLoaded(false);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header
            className="header wow slideInDown"
            textAlign={"center"}
            style={{ fontSize: "80px", color: "white", paddingTop: "1em" }}
          >
            <a className="manage-title-header manage-highlight">
              Welcome to
              <br />
              Bugs Money
            </a>
            <Header as={"h1"} style={{ color: "#4cc0ff" }}>
              Your best option to manage personal finances.
            </Header>
          </Header>
          <Divider />
          <br />
          <div
            id="welcome-p"
            className="wow fadeInDown"
            data-wow-delay="0.6s"
            style={{ color: "white", fontSize: "25px" }}
          >
            <p style={{ paddingLeft: "1em", paddingRight: "1em" }}>
              Lorem ipsum dolor sit amet, an ius oratio dictas feugiat. Amet
              bonorum mei ei. An usu copiosae probatus evertitur. Mei amet
              exerci singulis te, pro ne mundi labores perfecto. Nam an mollis
              vocibus scaevola, an posse invidunt nec. Duo ad omnesque tincidunt
              voluptatibus, putant concludaturque vel id, id vix veniam accumsan
              fabellas.
            </p>
            <br />
          </div>
        </div>
        <div className="content wow rollIn" data-wow-delay="0.3s">
          <Container fluid className="wow zoomIn" data-wow-delay="0.4s">
            <a className="manage-title manage-highlight">
              Manage your money like a PRO!!
            </a>
          </Container>
        </div>
        <div className="sections-container" style={{ paddingBottom: "10px" }}>
          <br />
          <div
            className="section wow slideInLeft"
            data-wow-delay="0.1s"
            data-wow-iteration="1"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationIterationCount: "1"
            }}
          >
            <div className="title-items black-text">
              <h2>Budgets on another Level</h2>
              <br />
              <p style={{ paddingRight: "1em" }}>
                With Bugs Money you can easily manage your monthly budget, add
                all your accounts, keep all you transactions in one place
              </p>
              <br />
            </div>
            <div className="gifs">
              <span>
                <img src={budget_ico} alt="bugs-pro" />
              </span>
            </div>
          </div>
          <br />
          <br />
          <div
            className="section wow slideInRight"
            data-wow-delay="0.3s"
            data-wow-iteration="1"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationIterationCount: "1"
            }}
          >
            <div className="title-items black-text">
              <h2>Never Run Out Of Money Again</h2>
              <br />
              <p>
                Get instant reports on how have you spent your money, how much
                is available and how much do you owe according to your budget
                settings.
              </p>
              <br />
            </div>
            <div className="gifs">
              <span>
                <img src={no_money} alt="bugs-poor" />
              </span>
            </div>
          </div>
        </div>
        <br />
        <div className="content2 wow slideInRight" data-wow-delay="0.3s">
          <Container fluid className="wow zoomIn" data-wow-delay="0.7s">
            <a className="manage-title manage-highlight">
              Add as many accounts as you want!
            </a>
          </Container>
        </div>
        <br />
        <div className="content3 wow slideInLeft" data-wow-delay="0.3s">
          <Container fluid className="wow zoomIn" data-wow-delay="0.7s">
            <a className="manage-title manage-highlight">
              Keep track of All your Transactions!
            </a>
          </Container>
        </div>
        <div className="content4 wow" data-wow-delay="0.5s">
          <Container
            fluid
            className="wow zoomIn"
            data-wow-delay="0.7s"
            textAlign="center"
          >
            <a
              className="manage-title-tech manage-highlight"
              style={{ fontSize: "80px" }}
            >
              Tech Used to make this App
            </a>
            <Container className="Tech-Icons wow flipInX" data-wow-delay="0.9s">
              <br />
              <br />
              <Icon.Group size="huge">
                <Icon name="node" />
              </Icon.Group>
              <br />
              <br />
              <Icon.Group size="huge">
                <Icon name="react" />
              </Icon.Group>
              <br />
              <Icon.Group size="huge">
                <Image src={mongoDB} />
              </Icon.Group>
            </Container>
          </Container>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    homePageLoaded: bool => {
      dispatch(homePageLoaded(bool));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Home);
