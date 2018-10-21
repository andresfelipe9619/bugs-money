import React, {Component} from 'react';
import {Segment, Container, Grid, Header} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {homePageLoaded} from './redux/actions';

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
            marginTop: '7em',
          }}
        >
          <Grid.Row>
            <Grid.Column width={5}>
              <Segment>
                <Header as="h1" textAlign="center">
                  MISION
                </Header>
                <p />
              </Segment>
            </Grid.Column>

            <Grid.Column width={5}>
              <Segment>
                <Header as="h1" textAlign="center">
                  VISION
                </Header>
                <p />
              </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
              <Segment>
                <Header as="h1" textAlign="center">
                  HISTORIA
                </Header>
                <p />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    homePageLoaded: (bool) => {
      dispatch(homePageLoaded(bool));
    },
  };
};
export default connect(
    null,
    mapDispatchToProps
)(Home);
