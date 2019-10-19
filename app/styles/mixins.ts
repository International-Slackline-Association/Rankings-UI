import styled, { css } from 'styles/styled-components';

export const clickEffect = css`
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    transition: opacity 0.2s;
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

export const LinkButton = styled.a`
  ${clickEffect};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  text-decoration: none;
`;

export const elevatedShadow = css`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
`;
