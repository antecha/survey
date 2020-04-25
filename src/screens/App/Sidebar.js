// @flow
import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import type { SidebarProps } from './types';
import type { Element } from './types';

const { SubMenu } = Menu;
const { Sider } = Layout;

const Sidebar = ({ collapsed }: SidebarProps): Element<'Sider'> => (
  <Sider trigger={null} collapsible collapsed={collapsed}>
    <div className="logo" />
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <Icon type="user" />
        <span>Home</span>
        <Link to="/" />
      </Menu.Item>
      <SubMenu title={'Survey List'}>
        <Menu.Item>
          <Icon type="user" />
          <span>Survey Static</span>
          <Link to="/SurveyList/SurveyStatic" />
        </Menu.Item>
        <Menu.Item>
          <Icon type="user" />
          <span>Survey Dynamic</span>
          <Link to="/SurveyList/SurveyDynamic" />
        </Menu.Item>
        <Menu.Item>
          <Icon type="user" />
          <span>Survey Dynamic 2</span>
          <Link to="/SurveyList/SurveyDynamic2" />
        </Menu.Item>
      </SubMenu>

      <Menu.Item key="2">
        <Icon type="video-camera" />
        <span>create-survey</span>
        <Link to="/create-survey" />
      </Menu.Item>
    </Menu>
  </Sider>
);

export default Sidebar;
