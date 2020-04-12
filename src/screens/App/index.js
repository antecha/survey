// @flow
import React from 'react';
import Shell from './Shell';
import { BrowserRouter } from 'react-router-dom';
import type { Element } from './types';

const App = (): Element<'BrowserRouter'> => (
  <BrowserRouter>
    <Shell />
  </BrowserRouter>
);

export default App;
