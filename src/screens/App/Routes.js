import React from 'react';
import { Route } from 'react-router-dom';
import CreateSurvey from '../CreateSurvey';
import { StyledContent } from './styles';

export const AppContent = ({ children }) => <StyledContent>{children}</StyledContent>;

const Routes = () => {
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

export default Routes;
