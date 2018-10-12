import styled from 'styles/styled-components';
import media from 'styles/media';

const ModalWrapper = styled.div`
  background-color: ${props => props.theme.componentBackgroundInverted};
  /* border: 1px solid ${props => props.theme.border}; */
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin: 0 0px 0px 30px; */
  padding: 8px;
  width: 75vw;
  height: 75vh;
  max-height: 600px;
  max-width: 300px;
  ${media.desktopLarge`
    display: none;
  `};
`;

export default ModalWrapper;
