import * as React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';

import { RootState, ContainerState } from './types';
import Wrapper from './Wrapper';
import TabPanel from 'components/TabPanel';
import styled from 'styles/styled-components';
import StyledTextField from './TextField';
import LoadableButton from 'components/LoadableButton';
import Snackbar from 'components/Snackbar';
import { replace } from 'connected-react-router';
import cognitoUser from 'api/amplify/user';
import { SmallLoading } from 'components/Loading';

interface OwnProps {}

interface StateProps {
  readonly admingLoginState: ContainerState;
}

interface DispatchProps {
  readonly dispatch: Dispatch;
}

interface State {
  readonly email: string;
  readonly password: string;
  readonly snackbarOpen: boolean;
  readonly snackbarMessage: string;
}

type Props = StateProps & DispatchProps & OwnProps;

class AdminLogin extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      snackbarOpen: false,
      email: '',
      password: '',
      snackbarMessage: '',
    };

    this.props.dispatch(actions.checkUser());
  }

  public componentDidUpdate(prevPros: Props, prevState: State) {
    if (!prevState.snackbarOpen && this.props.admingLoginState.loginError) {
      this.openSnackbar(true, this.props.admingLoginState.loginError.message);
      this.props.dispatch(actions.clearLoginError());
    }
  }

  private updateEmail = evt => {
    this.setState({
      email: evt.target.value,
    });
  };
  private updatePassword = evt => {
    this.setState({
      password: evt.target.value,
    });
  };

  private openSnackbar = (state: boolean, message?: string) => {
    this.setState({ snackbarOpen: state, snackbarMessage: message || '' });
  };

  private onSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.openSnackbar(false);
  };

  private login = async () => {
    const email = this.state.email;
    const password = this.state.password;
    if (!email || email.trim().length === 0) {
      this.openSnackbar(true, 'Email Required');
      return;
    }

    if (!password || password.trim().length === 0) {
      this.openSnackbar(true, 'Password Required');
      return;
    }

    this.props.dispatch(actions.login(email, password));
  };

  public render() {
    const isLoading = this.props.admingLoginState.isLoginLoading;
    return (
      <TabPanelWrapper>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Login as admin" />
        </Helmet>
        <Wrapper>
          <Header>Login</Header>
          <StyledTextField
            onChange={this.updateEmail}
            label={'email'}
            placeholder={'e-mail'}
          />
          <StyledTextField
            onChange={this.updatePassword}
            type={'password'}
            label={'password'}
            placeholder={'password'}
          />
          <LoadableButton onClick={this.login} loading={isLoading}>
            Login
          </LoadableButton>
        </Wrapper>
        <Snackbar
          open={this.state.snackbarOpen}
          handleClose={this.onSnackbarClose}
          message={this.state.snackbarMessage}
        />
      </TabPanelWrapper>
    );
  }
}

const Header = styled.h3`
  align-self: center;
  margin-bottom: 16px;
`;
const TabPanelWrapper = styled(TabPanel)`
  justify-content: center;
`;

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  admingLoginState: selectors.selectAdminLogin(),
});

function mapDispatchToProps(
  dispatch: Dispatch,
  ownProps: OwnProps,
): DispatchProps {
  return {
    dispatch: dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// <OwnProps> restricts access to the HOC's other props. This component must not do anything with reducer hoc
const withReducer = injectReducer<OwnProps>({
  key: 'adminLogin',
  reducer: reducer,
});
// <OwnProps> restricts access to the HOC's other props. This component must not do anything with saga hoc
const withSaga = injectSaga<OwnProps>({ key: 'adminLogin', saga: saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AdminLogin);
