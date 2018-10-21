import React from 'react';
import {Segment, Dimmer, Loader} from 'semantic-ui-react';

const Loading = (props) => {
  if (props.error) {
    return (
      <div>
        <h1>Error</h1>
        <h3>{String(props.error)}</h3>
      </div>
    );
  } else {
    return (
      <Segment
        style={{
          marginTop: '7em',
          height: '20em',
        }}
      >
        <Dimmer inverted active>
          <Loader size="big">Loading</Loader>
        </Dimmer>
      </Segment>
    );
  }
};
export default Loading;
