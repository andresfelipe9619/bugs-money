import React, { PureComponent } from "react";
import { Grid } from "semantic-ui-react";
import ActionRow from "../../components/actionRow";

export default class CategoryRow extends PureComponent {
  render() {
    const { openModal } = this.props;

    return (
      <Grid>
        <ActionRow openModal={openModal} inverted={false} header="Categories" />
      </Grid>
    );
  }
}
