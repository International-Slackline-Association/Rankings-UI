import styled from 'styles/styled-components';

interface OwnProps {}

const Window = styled<OwnProps, 'div'>('div')`
  background-color: ${props => props.theme.componentBackgroundInverted};
  border-radius: 10px;
  /* width: 80%; */
  /* height: 100%; */
  /* max-width: 260px; */
  /* max-height: 260px; */
  position: relative;
  /* overflow: hidden; */
`;

export default Window;
