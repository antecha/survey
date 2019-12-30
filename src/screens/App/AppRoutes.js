import React from 'react';
import {Route} from 'react-router-dom';
import {Layout} from 'antd';

const {Content} = Layout;

const AppContent =({text})=> <Content
style={{
  margin: '24px 16px',
  padding: 24,
  background: '#fff',
  minHeight: 280,
}}
>
{text}
</Content>

const AppRoutes = () => <React.Fragment>
    <Route exact path="/">
          <AppContent text='home'/>
          </Route>

          <Route path="/nav2">
          <AppContent text='nav2'/>
          </Route>

          <Route path="/nav3">
          <AppContent text='nav3'/>
          </Route>
</React.Fragment>

export default AppRoutes;