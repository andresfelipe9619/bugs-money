import React, { PureComponent } from "react";
import { Grid } from "semantic-ui-react";
import ActionRow from "../../components/actionRow";

export default class TransactionRow extends PureComponent {
  render() {
    const {
      openModal,
      handleOnFilter,
      handleOnCancelFilter,
      header
    } = this.props;
    return (
      <Grid>
        <ActionRow
          {...{
            header,
            openModal,
            handleOnCancelFilter,
            handleOnFilter,
            inverted: true
          }}
        />
      </Grid>
    );
  }
}
