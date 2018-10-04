import styled, { keyframes } from 'styles/styled-components';
import { rgba } from 'polished';

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
    border: 5px solid ${props => props.theme.primary && rgba(props.theme.primary, 0.1)};
    border-top-color: ${props => props.theme.primary};
    border-radius: 50%;
    animation: ${loadingAnimationSpin} 1s linear infinite;
  }
`;

export const SmallLoading = Loading.extend`
  &::after {
    width: 18px;
    height: 18px;
    border-width: 2px;
  }
`;

export const InlineLoading = Loading.extend`
  width: auto;
  height: auto;
  position: static;
`;

export const InlineSmallLoading = SmallLoading.extend`
  width: auto;
  height: auto;
  position: static;
`;

export default Loading;
