import React, {Component} from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({hasError: true});
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>
            {`We're`} working on it and {`we'll`} get it fixed as soon as we
            can.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
