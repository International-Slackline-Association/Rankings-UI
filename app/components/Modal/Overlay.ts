import styled, { colors } from 'styles/styled-components';
import zIndex from 'styles/zIndex';

// tslint:disable-next-line:no-empty-interface
interface OwnProps {}

const Overlay = styled<OwnProps, 'div'>('div')`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${colors.overlayBackground};
  /* opacity: 0.001; */
`;

export default Overlay;
