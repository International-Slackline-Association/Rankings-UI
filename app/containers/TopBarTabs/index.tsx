import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { TabList, TabPanel, Tab } from 'react-tabs';
import Tabs from './Tabs';
import Wrapper from './Wrapper';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { compose, Dispatch } from 'redux';
import reducer from './reducer';
import saga from './saga';
import { makeSelectIndex } from './selectors';
import { changeTopBarIndex, getSampleData } from './actions';
import Link from './Link';
import { ApplicationState, ReduxState } from 'types';

// tslint:disable-next-line:no-empty-interface
interface OwnProps {
}

interface StateProps {
  selectedIndex: number;
}

interface DispatchProps {
  onSelectedIndexChanged: any;
}

type Props = StateProps & DispatchProps & OwnProps;

interface DefaultOwnProps {
  selectedIndex: number;
}

class TopBarTabs extends React.Component<Props> {
  public static defaultProps: DefaultOwnProps = {
    selectedIndex: 0,
  };

  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <Wrapper>
        <Tabs onSelect={this.props.onSelectedIndexChanged} selectedIndex={this.props.selectedIndex} forceRenderTabPanel>
          <TabList>
            <Tab>
              <Link to="/">
                <FormattedMessage {...messages.rankings} />
              </Link>
            </Tab>
            <Tab>
              <Link to="/contests">
                <FormattedMessage {...messages.contests} />
              </Link>
            </Tab>
          </TabList>
          <TabPanel />
          <TabPanel />
        </Tabs>
      </Wrapper>
    );
  }
}

export function mapDispatchToProps(dispatch: Dispatch, ownProps: OwnProps): DispatchProps {
  return {
    onSelectedIndexChanged: (index: number) => {
      dispatch(changeTopBarIndex(index));
      dispatch(getSampleData());
    },
  };
}

const mapStateToProps = createStructuredSelector<ApplicationState, StateProps>({
  selectedIndex: makeSelectIndex(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer<OwnProps>({
  key: 'topBarTabs',
  reducer: reducer,
});

const withSaga = injectSaga<OwnProps>({ key: 'topBarTabs', saga: saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TopBarTabs);
