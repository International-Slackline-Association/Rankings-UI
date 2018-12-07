import * as React from 'react';

import styled from 'styles/styled-components';
import media from 'styles/media';
import breakpoints from 'styles/breakpoints';
import AppConstants from 'styles/AppConstants';

const TabPanel: React.SFC<{}> = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

const padding = (size: number) => AppConstants.LeftPadding(size);

const Wrapper = styled.div`
  /* background-color: ${props => props.theme.appBackground}; */
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: stretch; */
  flex-direction: column;
  /* align-items: flex-start; */
  /* max-width: 100%;
  max-height: 100%; */
  padding: 24px ${padding(breakpoints.mobile)}px 8px
    ${padding(breakpoints.mobile)}px;
  min-height: calc(100vh - 36px - 36px - 36px);
  /* position: relative; */

  ${media.tablet`
    min-height: calc(100vh - 36px - 36px - 36px);
    padding: 24px ${padding(breakpoints.tablet)}px 8px ${padding(
    breakpoints.tablet,
  )}px;
  `};

  ${media.desktop`
    min-height: calc(100vh - 36px - 36px - 36px);
    padding: 24px ${padding(breakpoints.desktop)}px 8px ${padding(
    breakpoints.desktop,
  )}px;

  `};
`;
export default TabPanel;
