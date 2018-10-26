import React, { Component } from "react";
import { Segment, Container, Grid, Header, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { homePageLoaded } from "./redux/actions";
import counting_gif from "../../assets/images/counting_money.gif";
import budget_ico from "../../assets/images/king_budget.jpg";
class Home extends Component {
  componentDidMount() {
    this.props.homePageLoaded(true);
  }

  componentWillUnmount() {
    this.props.homePageLoaded(false);
  }

  render() {
    return (
      <Container>
        <Grid
          divided="vertically"
          style={{
            marginTop: "7em"
          }}
        >
          <Grid.Row>
            <Grid.Column width={8}>
              <Image src={counting_gif} alt="bugs gif" />
            </Grid.Column>

            <Grid.Column width={8}>
              <Segment>
                <Header as="h1" textAlign="center">
                  Never Run Out of Money Again
                </Header>

                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus tempore voluptatem, consequatur non sapiente
                  voluptatum provident assumenda quam voluptate dolorum aliquid.
                  Velit corrupti iure debitis laudantium voluptatem soluta saepe
                  atque?{" "}
                </p>

                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus tempore voluptatem, consequatur non sapiente
                  voluptatum provident assumenda quam voluptate dolorum aliquid.
                  Velit corrupti iure debitis laudantium voluptatem soluta saepe
                  atque?{" "}
                </p>

                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus tempore voluptatem, consequatur non sapiente
                  voluptatum provident assumenda quam voluptate dolorum aliquid.
                  Velit corrupti iure debitis laudantium voluptatem soluta saepe
                  atque?{" "}
                </p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <h2>Manage Your Budget Like a PRO</h2>
          <Grid.Row>
            <Grid.Column width={6}>
              <Image src={budget_ico} alt="bugs gif" />
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment />{" "}
            </Grid.Column>
            <Grid.Column width={6} />
          </Grid.Row>
        </Grid>
      </Container>
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
