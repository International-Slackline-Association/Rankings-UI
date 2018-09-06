/**
 *
 * TopBarTabs
 *
 */

import * as React from 'react';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled, { colors } from 'styles/styled-components';
import media from 'styles/media';
import zIndex from 'styles/zIndex';

import { TabList, TabPanel, Tab } from 'react-tabs';
import Tabs from './Tabs';
import breakpoints from 'styles/breakpoints';
import AppConstants from 'styles/AppConstants';
import Wrapper from './Wrapper';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import reducer from './reducer';
import { makeSelectIndex } from './selectors';
import { changeTopBarIndex } from './actions';
import Link from './Link';

interface IProps {
  selectedIndex?: number;
  selectedItem?: {
    contestId?: string;
    athleteId?: string;
  };
  changeSelectedIndex?(index: number): void;
}

interface IDefaultProps {
  selectedIndex: number;
}

class TopBarTabs extends React.Component<IProps> {
  public static defaultProps: IDefaultProps = {
    selectedIndex: 0,
  };

  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <Wrapper>
        <Tabs
          onSelect={this.props.changeSelectedIndex}
          selectedIndex={this.props.selectedIndex}
          forceRenderTabPanel
        >
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

export function mapDispatchToProps(dispatch) {
  return {
    changeSelectedIndex: (index: number) => dispatch(changeTopBarIndex(index)),
  };
}

const mapStateToProps = createStructuredSelector({
  selectedIndex: makeSelectIndex(),
});

const withConnect = connect<{}, {}, IProps>(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'topBarTabs', reducer: reducer });

// FIX: remove casting any after implementing type-safe reducers
export default compose(
  withReducer,
  withConnect,
)(TopBarTabs) as any;
