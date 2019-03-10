import React, { PureComponent } from "react";
import { Grid, Menu, Button, Icon, Input } from "semantic-ui-react";

export default class CategoryRow extends PureComponent {
  render() {
    const { openModal } = this.props;

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            {" "}
            <Menu>
              <Menu.Item header>Categories</Menu.Item>
              <Menu.Item position="right">
                {" "}
                <Button onClick={openModal} icon>
                  <Icon name="plus" />
                </Button>
              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
