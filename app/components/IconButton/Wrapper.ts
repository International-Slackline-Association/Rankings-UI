import styled from 'styles/styled-components';
import { clickEffect } from 'styles/mixins';

interface OwnProps {}

const Wrapper = styled<OwnProps, 'button'>('button')`
  ${clickEffect};
  padding: 0;
  display: block;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;

  @media (hover: hover) {
    &:hover {
      opacity: 0.7;
    }
  }

  &:active {
    opacity: 0.4;
  }
`;

export default Wrapper;
