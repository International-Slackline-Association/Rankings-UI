import styled, { css } from 'styles/styled-components';

export const clickEffect = css`
  transition: all 0.2s;

  &:hover {
    transition: all 0.2s;
    opacity: 0.7;
  }

  &:active {
    opacity: 0.4;
    transition: none;
  }

  &:focus {
    outline: none;
  }
`;

export const DefaultButton = styled.button`
  ${clickEffect};
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`;
