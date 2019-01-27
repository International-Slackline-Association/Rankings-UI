import styled, { css, keyframes } from 'styles/styled-components';
import { darken, rgba, lighten } from 'polished';
import media from 'styles/media';
import { clickEffect } from 'styles/mixins';

interface Props {
  centered?: boolean;
  loading: boolean;
}
const buttonLoadingAnimtionSpin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const LoadableButton = styled<Props, 'button'>('button')`
  /* ${clickEffect} */
  display: block;
  border: none;
  background-color: ${props => props.theme.primary};
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1em;
  padding: 16px 32px;
  outline: none;
  cursor: pointer;
  /* line-height: 14px; */
  transition: all 0.2s;
  color: ${props => props.theme.textInverted};
  user-select: none;
  position: relative;
  margin: ${props => props.centered && '0 auto'};

  ${props =>
    props.loading &&
    css`
      background-color: ${p => `${lighten(0.05, p.theme.primary)} !important`};
      color: rgba(0, 0, 0, 0) !important;

      &::after {
        position: absolute;
        display: block;
        content: '';
        width: 18px;
        height: 18px;
        border: 2px solid
          ${p => p.theme.textInverted && rgba(p.theme.textInverted, 0.1)};
        border-top-color: ${p => p.theme.textInverted};
        border-left-color: ${p => p.theme.textInverted};
        border-radius: 50%;
        animation: ${buttonLoadingAnimtionSpin} 0.75s linear infinite;
        top: 50%;
        left: 50%;
        margin-top: -9px;
        margin-left: -9px;
      }
    `} &:hover {
    transition: all 0.2s;
    background-color: ${props => lighten(0.05, props.theme.primary)};
  }

  &:active {
    transition: none;
    background-color: ${props => lighten(0.1, props.theme.primary)};
    color: ${props => rgba(props.theme.textInverted, 0.4)};
  }

  &:disabled {
    background-color: ${props => rgba(props.theme.primary, 0.4)};
    color: ${props => rgba(props.theme.textInverted, 0.4)};
    cursor: default;
  }

  &:focus {
    outline: none;
  }
`;

export default LoadableButton;
