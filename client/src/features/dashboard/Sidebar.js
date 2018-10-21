import _ from 'lodash';
import React from 'react';

import {Icon, Menu, Sidebar} from 'semantic-ui-react';

const MobileSidebar = ({
  children,
  leftItems,
  onPusherClick,
  onToggle,
  rightItems,
  visible,
}) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible={visible}
    >
      {_.map(leftItems, (item) => {
        let {content, ...rest} = item;
        return (
          <Menu.Item {...rest}>
            <Icon name={item.name} />
            {content}
          </Menu.Item>
        );
      })}
    </Sidebar>
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{minHeight: '100vh'}}
    >
      <Menu fixed="top" inverted>
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Item header>SMART BUDGETING</Menu.Item>
        <Menu.Menu position="right">
          {_.map(rightItems, (item) => (
            <Menu.Item {...item} />
          ))}
        </Menu.Menu>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default MobileSidebar;
