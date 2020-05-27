import * as React from 'react';
import { RankingsLogo } from 'app/components/Logo/rankingsLogo';
import { media } from 'styles/media';
import zIndex from 'styles/zIndex';
import { breakpoints } from 'styles/breakpoints';
import { AppConstants } from 'styles/AppConstants';
import styled from 'styled-components/macro';

export function NavBar() {
  return (
    <Wrapper>
      <RankingsLogo />
    </Wrapper>
  );
}

const padding = (size: number) => AppConstants.LeftPadding(size);

const Wrapper = styled.div`
  background-color: ${props => props.theme.componentBackgroundSecondary};
  border-bottom: 1px solid ${props => props.theme.border};
  height: ${AppConstants.NavBarHeight(breakpoints.mobile)}px;
  padding: 4px ${padding(breakpoints.mobile)}px;
  display: flex;
  align-items: center;
  width: 100%;
  z-index: ${zIndex('NavBar')};
  justify-content: space-between;

  ${media.tablet`
    height: ${AppConstants.NavBarHeight(breakpoints.tablet)}px;
    padding: 4px ${padding(breakpoints.tablet)}px;
    align-items: center;
  `};

  ${media.desktop`
    height: ${AppConstants.NavBarHeight(breakpoints.desktop)}px;
    padding: 4px ${padding(breakpoints.desktop)}px;
  `};
`;
