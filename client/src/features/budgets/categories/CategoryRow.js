import React, { PureComponent } from "react";
import { Grid, Menu, Button, Icon, Input } from "semantic-ui-react";

export default class CategoryRow extends PureComponent {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            {" "}
            <Menu>
              <Menu.Item header>Categories</Menu.Item>
              <Menu.Item position="right">
                {" "}
                <Button onClick={() => {}} icon>
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
