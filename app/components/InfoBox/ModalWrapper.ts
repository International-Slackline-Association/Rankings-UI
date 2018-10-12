import styled from 'styles/styled-components';
import media from 'styles/media';

interface Props {
  large?: boolean;
}
const ModalWrapper = styled<Props, 'div'>('div')`
  background-color: ${props => props.theme.componentBackgroundInverted};
  /* border: 1px solid ${props => props.theme.border}; */
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin: 0 0px 0px 30px; */
  padding: 8px;
  width: 75vw;
  height: ${props => props.large ? 85 : 75}vh
  max-height: 1024px;
  max-width: 300px;
  ${media.desktopLarge`
    display: none;
  `};
`;

export default ModalWrapper;
