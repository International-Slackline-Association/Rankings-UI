import AppConstants from 'styles/AppConstants';
import styled, { colors } from 'styles/styled-components';
import breakpoints from 'styles/breakpoints';
import zIndex from 'styles/zIndex';
import media from 'styles/media';

const padding = (size: number) => AppConstants.LeftPadding(size);

const Wrapper = styled.div`
  background-color: ${props => props.theme.componentBackground};
  border-bottom: 1px solid ${props => props.theme.border};
  height:  ${AppConstants.TopBarHeight(breakpoints.mobile)}px;
  /* padding: 0 0 0 0; */
  display: flex;
  align-items: center;
  /* top: 0; */
  /* width: 100%; */
  z-index: ${zIndex('TopBarTabs')};
  justify-content: flex-start;
  /* box-shadow: 3px 1px 10px ${colors.grayLight}; */
  ${media.tablet`
    height: ${AppConstants.TopBarHeight(breakpoints.tablet)}px;
    padding: 0 ${padding(breakpoints.tablet)}px 0 ${padding(
    breakpoints.tablet,
  )}px;
    align-items: center;
  `};

  ${media.desktop`
    padding: 0 ${padding(breakpoints.desktop)}px 0 ${padding(
    breakpoints.desktop,
  )}px;
  `};
`;

export default Wrapper;
