// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import CreateSurvey from '../CreateSurvey';
import { StyledContent } from './styles';
import type { RoutesProps } from './types';
import type { Element } from './types';
import SurveyStatic from '../SurveyStatic';

export const AppContent = ({ children }: RoutesProps): Element<'StyledContent'> => (
  <StyledContent>{children}</StyledContent>
);

const Routes = (): Element<any> => {
  return (
    <React.Fragment>
      <Route exact path="/">
        <AppContent>Suvey-list</AppContent>
      </Route>

      <Route path="/create-survey">
        <AppContent>
          <CreateSurvey />
        </AppContent>
      </Route>

      <Route path="/SurveyList/SurveyStatic">
        <AppContent>
          <SurveyStatic />
        </AppContent>
      </Route>
    </React.Fragment>
  );
};

export default Routes;
