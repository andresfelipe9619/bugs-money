import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

export class Profile extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return <div />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);

