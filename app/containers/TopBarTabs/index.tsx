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

class TopBarTabs extends React.Component<{}, {}> {
  public render() {
    return (
      <Wrapper>
        <Tabs onSelect={null} selectedIndex={0} forceRenderTabPanel>
          <TabList>
            <Tab>
              <FormattedMessage {...messages.rankings} />
            </Tab>
            <Tab>
              <FormattedMessage {...messages.contests} />
            </Tab>
          </TabList>
          <TabPanel />
          <TabPanel />
        </Tabs>
      </Wrapper>
    );
  }
}

const padding = (size: number) => AppConstants.LeftPadding(size);

const Wrapper = styled.div`
  background-color: ${colors.white};
  /* border-bottom: 1px solid ${props => props.theme.border}; */
  height:  ${AppConstants.TopBarHeight(breakpoints.mobile)}px;
  padding: 0 0 0 0;
  display: flex;
  align-items: center;
  /* top: 0; */
  width: 100%;
  z-index: ${zIndex('TopBarTabs')};
  justify-content: flex-start;
  box-shadow: 3px 1px 10px ${colors.grayLight};
  ${media.tablet`
    height: ${AppConstants.TopBarHeight(breakpoints.tablet)}px;
    padding: 0 ${padding(breakpoints.tablet)}px 0 ${padding(
    breakpoints.tablet,
  )}px;
    align-items: center;
  `};

  ${media.desktop`
    padding: 0 ${padding(breakpoints.desktop)}px 0 ${padding(
    breakpoints.desktop,
  )}px;
  `};
`;

export default TopBarTabs;
