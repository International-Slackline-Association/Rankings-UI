import styled from 'styles/styled-components';
import media from 'styles/media';
import AppConstants from 'styles/AppConstants';
import breakpoints from 'styles/breakpoints';

interface OwnProps {}

const padding = (size: number) => AppConstants.LeftPadding(size);

const Wrapper = styled.div`
  background-color: ${props => props.theme.componentBackgroundSecondary};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 24px ${padding(breakpoints.mobile)}px 8px
    ${padding(breakpoints.mobile)}px;

  ${media.tablet`
    padding: 24px ${padding(breakpoints.tablet)}px 8px ${padding(
    breakpoints.tablet,
  )}px;
  `};

  ${media.desktop`
    padding: 24px ${padding(breakpoints.desktop)}px 8px ${padding(
    breakpoints.desktop,
  )}px;
    flex-direction: row;
    align-items: flex-start;
  `};
`;

export default Wrapper;
