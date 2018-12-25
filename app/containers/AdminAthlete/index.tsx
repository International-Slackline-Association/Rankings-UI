/**
 *
 * AdminAthlete
 *
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import selectAdminAthlete from './selectors';
import reducer from './reducer';
import saga from './saga';

import { RootState } from './types';


interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps;

class AdminAthlete extends React.PureComponent<Props> {
  public render() {
    return (
      <div>
        <Helmet>
          <title>AdminAthlete</title>
          <meta name="description" content="Description of AdminAthlete" />
        </Helmet>
        ADMIN ATHlete
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  adminAthlete: selectAdminAthlete(),
});

function mapDispatchToProps(dispatch: Dispatch, ownProps: OwnProps): DispatchProps {
  return {
    dispatch: dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// <OwnProps> restricts access to the HOC's other props. This component must not do anything with reducer hoc
const withReducer = injectReducer<OwnProps>({ key: 'adminAthlete', reducer: reducer });
// <OwnProps> restricts access to the HOC's other props. This component must not do anything with saga hoc
const withSaga = injectSaga<OwnProps>({ key: 'adminAthlete', saga: saga });

export default compose<TReducer, TSaga, TConnect, ReturnType>(
  withReducer,
  withSaga,
  withConnect,
)(AdminAthlete);

type ReturnType = React.ComponentType<OwnProps>;
type TReducer = ReturnType;
type TSaga = ReturnType;
type TConnect = typeof AdminAthlete;
