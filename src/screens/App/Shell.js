import React from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import Routes from './Routes';
import Header from './Header';
import { StyledLayout } from './styles';
class Shell extends React.Component {
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
        <Sidebar collapsed={this.state.collapsed} />

        <Layout>
          <Header collapsed={this.state.collapsed} onIconClick={this.toggle} />

          <Routes />
        </Layout>
      </StyledLayout>
    );
  }
}

export default Shell;
