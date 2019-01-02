import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';

import { push } from 'connected-react-router';
import { ApplicationRootState } from 'types';
import AdminLogin from 'containers/AdminLogin';

interface OwnProps {}

interface StateProps {
  readonly isAuthenticated: boolean;
}

interface DispatchProps {
  redirectToLogin(): void;
}

type Props = StateProps & DispatchProps & OwnProps;

export default function AuthenticatorHoc(
  WrappedComponent: React.ComponentType,
) {
  class Authenticate extends React.Component<Props> {
    public componentDidMount() {
      this.checkAndRedirect();
    }

    public componentDidUpdate() {
      this.checkAndRedirect();
    }

    private checkAndRedirect() {
      const { isAuthenticated, redirectToLogin } = this.props;

      if (!isAuthenticated) {
        // redirectToLogin();
      }
    }

    public render() {
      return (
        <div>
          {this.props.isAuthenticated ? (
            <WrappedComponent {...this.props} />
          ) : (
            <AdminLogin />
          )}
        </div>
      );
    }
  }

  function mapStateToProps(state: ApplicationRootState): StateProps {
    return {
      isAuthenticated: state.adminLogin && state.adminLogin.isAuthenticated,
    };
  }

  function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
    return {
      redirectToLogin: () => {
        dispatch(push(`/admin/login`));
      },
    };
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Authenticate);
}
