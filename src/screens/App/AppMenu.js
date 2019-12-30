import React from 'react';
import {  Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'

const {Sider} = Layout;

const AppMenu = ({collapsed})=> <Sider trigger={null} collapsible collapsed={collapsed}>
<div className="logo" />
<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
  <Menu.Item key="1">
    <Icon type="user" />
    <span>home</span>
    <Link to="/" />
  </Menu.Item>
  <Menu.Item key="2">
    <Icon type="video-camera" />
    <span>nav 2</span>
    <Link to="/nav2" />
  </Menu.Item>
  <Menu.Item key="3">
    <Icon type="upload" />
    <span>nav 3</span>
    <Link to="/nav3" />
  </Menu.Item>
</Menu>
</Sider>

export default AppMenu;