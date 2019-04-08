import React from "react";
import { Button, Icon, Popup } from "semantic-ui-react";
const ActionsCell = ({
  handleOnUpdate,
  handleOnDelete,
  handleOnView,
  original
}) => (
  <Button.Group>
    {handleOnView && (
      <Popup
        trigger={
          <Button icon size="tiny" onClick={handleOnView(original)}>
            <Icon name="eye" />
          </Button>
        }
        content={`View ${original ? original.name : "this item"}`}
        inverted
      />
    )}
    {handleOnUpdate && (
      <Popup
        trigger={
          <Button icon size="tiny">
            <Icon name="edit" onClick={handleOnUpdate(original)} />
          </Button>
        }
        content={`Edit ${original ? original.name : "this item"}`}
        inverted
      />
    )}{" "}
    {handleOnDelete && (
      <Popup
        trigger={
          <Button icon size="tiny">
            <Icon name="trash" onClick={handleOnDelete(original)} />
          </Button>
        }
        content={`Delete ${original ? original.name : "this item"}`}
        inverted
      />
    )}
  </Button.Group>
);
export default ActionsCell;
