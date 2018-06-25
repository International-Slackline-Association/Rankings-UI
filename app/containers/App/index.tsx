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
import styled, { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router';
import theme from 'styles/theme';
import NotFoundPage from 'containers/NotFoundPage';
import HomePage from 'containers/HomePage';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <ThemeProvider theme={theme.dark}>
        <AppWrapper>
          <Helmet titleTemplate="%s - ISA Rankings" defaultTitle="ISA Rankings">
            <meta name="description" content="ISA Rankings" />
          </Helmet>
          <Switch>
            <Route exact path="/" component={HomePage} />} />
            <Route component={NotFoundPage} />
          </Switch>
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
