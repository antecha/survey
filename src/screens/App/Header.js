// @flow
import React from 'react';
import { Icon } from 'antd';
import { StyledHeader } from './styles';
import type { HeaderProps } from './types';
import type { Element } from './types';

const Header = ({ collapsed, onIconClick }: HeaderProps): Element<'StyledHeader'> => (
  <StyledHeader>
    <Icon
      className="trigger"
      type={collapsed ? 'menu-unfold' : 'menu-fold'}
      onClick={onIconClick}
    />
  </StyledHeader>
);

export default Header;
