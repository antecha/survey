// @flow
import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import type { SidebarProps } from './types';
import type { Element } from './types';

const { Sider } = Layout;

const Sidebar = ({ collapsed }: SidebarProps): Element<'Sider'> => (
  <Sider trigger={null} collapsible collapsed={collapsed}>
    <div className="logo" />
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <Icon type="user" />
        <span>Survey List</span>
        <Link to="/" />
      </Menu.Item>
      <Menu.Item skey="2">
        <Icon type="video-camera" />
        <span>create-survey</span>
        <Link to="/create-survey" />
      </Menu.Item>
    </Menu>
  </Sider>
);

export default Sidebar;
