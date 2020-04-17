// @flow
import React from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import Routes from './Routes';
import Header from './Header';
import { StyledLayout } from './styles';
import type { ShellState } from './types';
import type { Element } from './types';

class Shell extends React.Component<{}, ShellState> {
  state = {
    collapsed: false,
  };

  toggle = (): void => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render(): Element<'StyledLayout'> {
    return (
      <StyledLayout>
        <Sidebar collapsed={this.state.collapsed} />

        <Layout>
          <Header collapsed={this.state.collapsed} onIconClick={this.toggle} />
          <div>tttettatadsadsadsasa</div>
          <Routes />
        </Layout>
      </StyledLayout>
    );
  }
}

export default Shell;
