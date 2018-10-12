import styled from 'styles/styled-components';
import media from 'styles/media';

const SideBoxWrapper = styled.div`
  background-color: ${props => props.theme.componentBackgroundInverted};
  border: 1px solid ${props => props.theme.border};
  border-radius: 0.5em;
  box-shadow: 0px 0px 8px 1px ${props => props.theme.border};
  display: none;
  min-height: 100%;
  margin: 0 0px 0px 30px;
  padding: 8px;
  ${media.tablet`
  `};

  ${media.desktopLarge`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 33%;
  `};
`;
export default SideBoxWrapper;
