import React from 'react';
import { Layout, Icon } from 'antd';

const Header = ({ collapsed, onIconClick }) => (
  <Layout.Header style={{ background: '#fff', padding: 0 }}>
    <Icon
      className="trigger"
      type={collapsed ? 'menu-unfold' : 'menu-fold'}
      onClick={onIconClick}
    />
  </Layout.Header>
);

export default Header;
