/**
 *
 * Rankings
 *
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import selectRankings from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { RootState } from './types';

// tslint:disable-next-line:no-empty-interface
interface OwnProps {}

// tslint:disable-next-line:no-empty-interface
interface StateProps {}

// tslint:disable-next-line:no-empty-interface
interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps;

export class Rankings extends React.PureComponent<Props> {
  public render() {
    return (
      <div>
        <Helmet>
          <title>Rankings</title>
          <meta name="description" content="Description of Rankings" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  rankings: selectRankings(),
});

function mapDispatchToProps(dispatch: Dispatch, ownProps: OwnProps): DispatchProps {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer<OwnProps>({ key: 'rankings', reducer: reducer });
const withSaga = injectSaga<OwnProps>({ key: 'rankings', saga: saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Rankings);
