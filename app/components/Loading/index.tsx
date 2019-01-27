import styled, { keyframes } from 'styles/styled-components';
import { rgba } from 'polished';
import * as React from 'react';
import {
  SmallLoadingContainer,
  TinyLoadingContainer,
} from 'components/Containers';

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

interface LoadingProps {
  minHeight?: string;
  minWidth?: string;
}

export const TinyLoading = () => (
  <TinyLoadingContainer>
    <TinyLoadingItem />
  </TinyLoadingContainer>
);

export const TinyLoadingItem = styled(Loading)`
  &::after {
    width: 1em;
    height: 1em;
    border-width: 2px;
  }
`;

export const SmallLoading = (props: LoadingProps) => (
  <SmallLoadingContainer
    style={{ minHeight: props.minHeight, minWidth: props.minWidth }}
  >
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
