import * as React from 'react';
import zIndex from 'styles/zIndex';
import { Tabs } from '@material-ui/core';
import styled from 'styles/styled-components';
import AppConstants from 'styles/AppConstants';
import breakpoints from 'styles/breakpoints';
import media from 'styles/media';
import { TabsProps } from '@material-ui/core/Tabs/Tabs';

const tabs = (props: TabsProps) => (
  <Tabs classes={{ flexContainer: 'flexContainer' }} {...props} />
);

const StyledTabs = styled(tabs)`
  && {
    display: flex;
    align-items: center;
    z-index: ${zIndex('TopBarTabs')};
    justify-content: flex-start;
    overflow-x: scroll;

    & .flexContainer {
      height: ${AppConstants.TopBarHeight(breakpoints.mobile)}px;

      ${media.tablet`
        height: ${AppConstants.TopBarHeight(breakpoints.tablet)}px;

      `};

      ${media.desktop`
        height: ${AppConstants.TopBarHeight(breakpoints.desktop)}px;
      `};
    }
  }
`;

export default StyledTabs;
