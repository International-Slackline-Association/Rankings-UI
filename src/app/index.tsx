/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components/macro';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { NavBar } from './components/NavBar';
import { TopBarTabs } from './containers/TopBarTabs';

export function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Helmet defaultTitle="ISA Rankings">
          <meta name="description" content="ISA Slackline Rankings" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Switch>
            <>
              <NavBar />
              <TopBarTabs />
              <Switch>
                <Route exact path="/rankings" component={HomePage} />
                <Route component={NotFoundPage} />
              </Switch>
            </>
          </Switch>
        </Switch>
        <GlobalStyle />
      </AppWrapper>
    </BrowserRouter>
  );
}

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* flex: 1; */
  background-color: ${props => props.theme.appBackground};
  color: ${props => props.theme.textPrimary};
  /* padding-top: 48px; */
  -webkit-font-smoothing: antialiased;

  ${media.tablet`
    /* padding-top: 64px; */
  `};
`;
