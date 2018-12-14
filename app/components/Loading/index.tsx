import styled, { keyframes } from 'styles/styled-components';
import { rgba } from 'polished';
import * as React from 'react';
import { Collapse } from '@material-ui/core';

const loadingAnimationSpin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;

  &::after {
    display: block;
    content: '';
    width: 44px;
    height: 44px;
    border: 5px solid
      ${props => props.theme.primary && rgba(props.theme.primary, 0.1)};
    border-top-color: ${props => props.theme.primary};
    border-radius: 50%;
    animation: ${loadingAnimationSpin} 1s linear infinite;
  }
`;

export const TinyLoading = styled(Loading)`
  &::after {
    width: 1em;
    height: 1em;
    border-width: 2px;
  }
`;

const SmallLoadingContainer = styled.div`
  position: relative;
  /* min-height: 100px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  color: ${props => props.theme.textSecondary};
  padding: 0 24px;
  text-align: center;
`;

export const SmallLoading = props => (
  <SmallLoadingContainer>
    <SmallLoadingItem />
  </SmallLoadingContainer>
);
export const SmallLoadingItem = styled(Loading)`
  &::after {
    width: 1.5em;
    height: 1.5em;
    border-width: 2px;
  }
`;
export const InlineLoading = styled(Loading)`
  width: auto;
  height: auto;
  position: static;
`;

export const InlineSmallLoading = styled(Loading)`
  width: auto;
  height: auto;
  position: static;
`;

export default Loading;
