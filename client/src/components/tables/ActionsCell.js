import React from "react";
import { Button, Icon } from "semantic-ui-react";
const ActionsCell = ({
  handleOnUpdate,
  handleOnDelete,
  handleOnView,
  original
}) => (
  <Button.Group>
    {handleOnView && (
      <Button icon size="tiny" onClick={handleOnView(original)}>
        <Icon name="eye" />
      </Button>
    )}
    {handleOnUpdate && (
      <Button icon size="tiny">
        <Icon name="edit" onClick={handleOnUpdate(original)} />
      </Button>
    )}{" "}
    {handleOnDelete && (
      <Button icon size="tiny">
        <Icon name="trash" onClick={handleOnDelete(original)} />
      </Button>
    )}
  </Button.Group>
);
export default ActionsCell;
