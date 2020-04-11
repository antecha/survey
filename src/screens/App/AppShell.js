import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

import AppMenu from './AppMenu';
import AppRoutes from './AppRoutes';
import AppHeader from './AppHeader';

const StyledLayout = styled(Layout)`
  height: 100vh;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
`;
class AppShell extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <StyledLayout>
        <AppMenu collapsed={this.state.collapsed} />

        <Layout>
          <AppHeader collapsed={this.state.collapsed} onIconClick={this.toggle} />

          <AppRoutes />
        </Layout>
      </StyledLayout>
    );
  }
}

export default AppShell;
