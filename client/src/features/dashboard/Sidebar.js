import _ from "lodash";
import React from "react";
import logo from "../../assets/images/king_icon.png";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";

const MobileSidebar = ({
  children,
  leftItems,
  onPusherClick,
  onToggle,
  rightItems,
  visible,
  isLoggedin
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
      {_.map(leftItems, item => {
        let { content, ...rest } = item;
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
      style={{ minHeight: "100vh" }}
    >
      <Menu fixed="top" inverted>
        {isLoggedin ? (
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
        ) : null}
        <Menu.Item as={Link} to="/" header>
          <img src={logo} alt="logo" />
          BUGS MONEY
        </Menu.Item>
        <Menu.Menu position="right">
          {isLoggedin
            ? _.map(rightItems.loggedin, item => <Menu.Item {...item} />)
            : _.map(rightItems.normal, item => <Menu.Item {...item} />)}
        </Menu.Menu>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default MobileSidebar;
