import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import CreateSurvey from '../CreateSurvey';

const { Content } = Layout;

export const AppContent = ({ children }) => (
  <Content
    style={{
      margin: '24px 16px',
      padding: 24,
      background: '#fff',
      minHeight: 280,
    }}
  >
    {children}
  </Content>
);

const AppRoutes = () => {
  return (
    <React.Fragment>
      <Route exact path="/">
        <AppContent>
          <CreateSurvey />
        </AppContent>
      </Route>

      <Route path="/create-survey">
        <AppContent children="create survey" />
      </Route>
    </React.Fragment>
  );
};

export default AppRoutes;
