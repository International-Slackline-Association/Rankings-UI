import styled from 'styles/styled-components';

interface OwnProps {}

const Wrapper = styled<OwnProps, 'div'>('div')`
  display: flex;
  flex-direction: column;
  margin: 32px 0px;
`;

export default Wrapper;
