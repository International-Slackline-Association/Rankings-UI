import styled, { css } from 'styles/styled-components';
import { rgba, lighten, darken } from 'polished';
import { clickEffect } from 'styles/mixins';
import media from 'styles/media';

interface ButtonProps {
  small?: boolean;
}

const size = (props: ButtonProps) => {
  if (props.small) {
    return css`
      font-size: 1em;
      height: 24px;
      padding: 0 12px;
    `;
  }
  return css`
    font-size: 1.5em;
    height: 48px;
    padding: 0 36px;
  `;
};

const SideBoxButton = styled<ButtonProps, 'button'>('button')`
  ${clickEffect};
  ${size};
  cursor: pointer;
  user-select: none;
  background-color: ${props => props.theme.componentBackgroundSecondary};
  color: ${props => props.theme.textInverted};
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 3px;
  border-color: ${props => props.theme.componentBackgroundSecondary};
  /* transition-property: background-color box-shadow; */
  display: flex;
  align-items: center;
  flex: none;

  &:hover {
    background-color: ${props => lighten(0.09, props.theme.componentBackgroundSecondary)};
  }

  &:active {
    background-color: ${props => darken(0.11, props.theme.componentBackgroundSecondary)};
    /* box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.1); */
  }
`;
export default SideBoxButton;
