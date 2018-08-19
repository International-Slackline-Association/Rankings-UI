/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import Helmet from 'react-helmet';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
// import styled, { ThemeProvider } from 'styled-components';
import styled, { theme, ThemeProvider } from 'styles/styled-components';
import { Switch, Route } from 'react-router';
import NotFoundPage from '../NotFoundPage';
import HomePage from '../HomePage';
import { hot } from 'react-hot-loader';
import NavBar from 'components/NavBar';
import media from 'styles/media';
import TopBarTabs from '../TopBarTabs';
import TabContent from 'components/TabContent';

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

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <ThemeProvider theme={theme.default}>
        <AppWrapper>
          <Helmet titleTemplate="%s - ISA Rankings" defaultTitle="ISA Rankings">
            <meta name="description" content="ISA Rankings" />
          </Helmet>
          <NavBar />
          <TopBarTabs />
          <TabContent />
          {/* <Switch>
            <Route exact path="/" component={HomePage} />} />
            <Route component={NotFoundPage} />
          </Switch> */}
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default hot(module)(App);