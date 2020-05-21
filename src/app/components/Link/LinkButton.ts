import styled from 'styled-components/macro';
import { clickEffect } from 'styles/mixins';

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
