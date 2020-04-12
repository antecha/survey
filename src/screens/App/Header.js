import React from 'react';
import { Icon } from 'antd';
import { StyledHeader } from './styles';

const Header = ({ collapsed, onIconClick }) => (
  <StyledHeader>
    <Icon
      className="trigger"
      type={collapsed ? 'menu-unfold' : 'menu-fold'}
      onClick={onIconClick}
    />
  </StyledHeader>
);

export default Header;
