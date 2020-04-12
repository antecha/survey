// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import CreateSurvey from '../CreateSurvey';
import { StyledContent } from './styles';
import type { RoutesProps } from './types';
import type { Element } from './types';

export const AppContent = ({ children }: RoutesProps): Element<'StyledContent'> => (
  <StyledContent>{children}</StyledContent>
);

const Routes = (): Element<any> => {
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
