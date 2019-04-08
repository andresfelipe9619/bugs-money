import React, { PureComponent } from "react";
import { Grid, Menu, Button, Icon, Input } from "semantic-ui-react";

export default class ActionRow extends PureComponent {
  state = {
    start: new Date(),
    end: new Date()
  };

  handleOnChange = event => {
    if (this.state.hasOwnProperty(event.target.name)) {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  render() {
    const { start, end } = this.state;
    const {
      openModal,
      handleOnFilter,
      handleOnCancelFilter,
      header,
      inverted
    } = this.props;
    return (
      <Grid.Row>
        <Grid.Column width={16}>
          {" "}
          <Menu
            style={{
              marginTop: "15px",
              paddingLeft: "10px",
              paddingRight: "10px"
            }}
            inverted={inverted}
          >
            <Menu.Item header>{header}</Menu.Item>
            {handleOnFilter && (
              <Menu.Item>
                <Input
                  label="Start"
                  type="date"
                  name="start"
                  iconPosition="left"
                  onChange={this.handleOnChange}
                />
                <Input
                  label="End"
                  type="date"
                  name="end"
                  iconPosition="left"
                  onChange={this.handleOnChange}
                />
                <Button
                  onClick={e => {
                    handleOnFilter(start, end);
                  }}
                  icon
                >
                  <Icon name="filter" />
                </Button>

                <Button onClick={handleOnCancelFilter} icon>
                  <Icon name="cancel" />
                </Button>
              </Menu.Item>
            )}

            <Menu.Item position="right">
              {" "}
              <Button onClick={openModal} icon>
                <Icon name="plus" />
              </Button>
            </Menu.Item>
          </Menu>
        </Grid.Column>
      </Grid.Row>
    );
  }
}
