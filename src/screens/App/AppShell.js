import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import styled from 'styled-components'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppMenu from './AppMenu';

const { Header, Sider, Content } = Layout;
const StyledLayout = styled(Layout)`
height:100vh ;
.trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover{
        color: #1890ff;
    }
  }

 .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
`
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
      <Router>
      <StyledLayout>

        <AppMenu collapsed = {this.state.collapsed}/>

        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>

          <Route exact path="/">
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            home
          </Content>
          </Route>

          <Route path="/nav2">
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            nav2
          </Content>
          </Route>

          <Route path="/nav3">
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            nav3
          </Content>
          </Route>
          
        </Layout>
      </StyledLayout>
      </Router>
    );
  }
}

export default AppShell