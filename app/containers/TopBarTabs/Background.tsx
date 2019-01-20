import AppConstants from 'styles/AppConstants';
import breakpoints from 'styles/breakpoints';
import zIndex from 'styles/zIndex';
import media from 'styles/media';
import { Paper } from '@material-ui/core';
import styled from 'styles/styled-components';
import * as React from 'react';

const padding = (size: number) => AppConstants.LeftPadding(size);
const paper = props => <Paper component="div" elevation={2} {...props} />;

const Background = styled(paper)` && {
  background-color: ${props => props.theme.componentBackground};
  /* border-bottom: 1px solid ${props => props.theme.border}; */
  height: ${AppConstants.TopBarHeight(breakpoints.mobile)}px;
  padding: 0 ${padding(breakpoints.mobile)}px 0 ${padding(
  breakpoints.mobile,
)}px;
  display: flex;
  align-items: center;
  z-index: ${zIndex('TopBarTabs')};
  justify-content: flex-start;
  overflow-x: scroll;

  ${media.tablet`
    height: ${AppConstants.TopBarHeight(breakpoints.tablet)}px;
    padding-left: ${padding(breakpoints.tablet)}px;
    padding-right: ${padding(breakpoints.tablet)}px;
    align-items: center;
  `};

  ${media.desktop`
    height: ${AppConstants.TopBarHeight(breakpoints.desktop)}px;
    padding-left: ${padding(breakpoints.desktop)}px;
    padding-right: ${padding(breakpoints.desktop)}px;
  `};
}
`;

export default Background;
