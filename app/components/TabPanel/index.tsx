import * as React from 'react';

import styled from 'styles/styled-components';
import media from 'styles/media';
import breakpoints from 'styles/breakpoints';
import AppConstants from 'styles/AppConstants';

const TabPanel: React.SFC<{ className?: string }> = props => {
  return <Wrapper className={props.className}>{props.children}</Wrapper>;
};

const padding = (size: number) => AppConstants.LeftPadding(size);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px ${padding(breakpoints.mobile)}px 8px
    ${padding(breakpoints.mobile)}px;

  min-height: calc(100vh - ${AppConstants.TopBarHeight(
      breakpoints.mobile,
    )}px - ${AppConstants.NavBarHeight(breakpoints.mobile)})px;

  ${media.tablet`
    min-height: calc(100vh - ${AppConstants.TopBarHeight(breakpoints.tablet)}px -
    ${AppConstants.NavBarHeight(breakpoints.tablet)}px
  );
    padding: 24px ${padding(breakpoints.tablet)}px 8px ${padding(
    breakpoints.tablet,
  )}px;
  `};

  ${media.desktop`
    min-height: calc(100vh - ${AppConstants.TopBarHeight(
      breakpoints.desktop,
    )}px - ${AppConstants.NavBarHeight(breakpoints.desktop)}px);
    padding: 24px ${padding(breakpoints.desktop)}px 8px ${padding(
    breakpoints.desktop,
  )}px;

  `};
`;

export default TabPanel;
