import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

const { Content } = Layout;

const AppContent = ({ text }) => (
  <Content
    style={{
      margin: '24px 16px',
      padding: 24,
      background: '#fff',
      minHeight: 280,
    }}
  >
    {text}
  </Content>
);

const AppRoutes = () => (
  <React.Fragment>
    <Route exact path="/">
      <AppContent text="Survey List" />
    </Route>

    <Route path="/create-survey">
      <AppContent text="create survey" />
    </Route>
  </React.Fragment>
);

export default AppRoutes;
