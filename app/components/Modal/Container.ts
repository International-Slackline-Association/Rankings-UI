import styled from 'styles/styled-components';
import zIndex from 'styles/zIndex';

interface OwnProps {}

const Container = styled<OwnProps, 'div'>('div')`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${zIndex('PopUps')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Container;
