// @flow
import type { Element } from 'react';
export type { Element } from 'react';

export type HeaderProps = {
  collapsed: boolean,
  onIconClick: () => void,
};
export type ShellState = {
  collapsed: boolean,
};

export type SidebarProps = {
  collapsed: boolean,
};

export type RoutesProps = {
  children: Element<any> | string,
};
