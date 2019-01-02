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
import styled, {
  theme,
  ThemeProvider,
  muiTheme,
} from 'styles/styled-components';
import { Switch, Route, Redirect } from 'react-router';
import NotFoundPage from 'containers/NotFoundPage';
import { hot } from 'react-hot-loader';
import HeaderBar from 'components/NavBar';
import media from 'styles/media';

import TopBarTabs from 'containers/TopBarTabs';
import Rankings from 'containers/Rankings/Loadable';
import GlobalStyle from './GlobalStyle';
import Contests from 'containers/Contests/Loadable';
import Contest from 'containers/Contest/Loadable';
import Athlete from 'containers/Athlete/Loadable';
import { MuiThemeProvider } from '@material-ui/core';
import AuthenticatorHoc from 'containers/Authenticator';
import AdminAthlete from 'containers/AdminAthlete/Loadable';
import AdminLogin from 'containers/AdminLogin/Loadable';
import AdminTopBarTabs from 'containers/AdminTopBarTabs';

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
        <MuiThemeProvider theme={muiTheme}>
          <AppWrapper>
            <Helmet
              titleTemplate="%s - ISA Rankings"
              defaultTitle="ISA Rankings"
            >
              <meta name="description" content="ISA Rankings" />
            </Helmet>
            <HeaderBar />
            <Switch>
              <Route path="/admin">
                <Switch>
                  <Redirect exact from="/admin" to="/admin/athlete" />
                  {/* <Route exact path="/admin/login"  component={AdminLogin} /> */}
                  <Route path="/admin/">
                    <React.Fragment>
                      <AdminTopBarTabs />
                      <Switch>
                        <Route
                          exact
                          path="/admin/athlete"
                          component={AuthenticatorHoc(AdminAthlete)}
                        />
                      </Switch>
                    </React.Fragment>
                  </Route>
                </Switch>
              </Route>
              <Route path="/">
                <React.Fragment>
                  <TopBarTabs />
                  <Switch>
                    <Redirect exact from="/" to="/rankings" />
                    <Route exact path="/rankings" component={Rankings} />
                    <Route exact path="/contests" component={Contests} />
                    <Route
                      exact
                      path="/contest/:id/:discipline"
                      component={Contest}
                    />
                    <Route exact path="/athlete/:id" component={Athlete} />
                    <Route exact path="/notfound" component={NotFoundPage} />
                    <Route component={NotFoundPage} />
                  </Switch>
                </React.Fragment>
              </Route>
            </Switch>
            <GlobalStyle />
          </AppWrapper>
        </MuiThemeProvider>
      </ThemeProvider>
    );
  }
}

export default hot(module)(App);
