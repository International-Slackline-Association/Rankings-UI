import AppConstants from 'styles/AppConstants';
import styled from 'styles/styled-components';
import breakpoints from 'styles/breakpoints';
import zIndex from 'styles/zIndex';
import media from 'styles/media';

const padding = (size: number) => AppConstants.LeftPadding(size);

const Wrapper = styled.div`
  background-color: ${props => props.theme.componentBackground};
  border-bottom: 1px solid ${props => props.theme.border};
  height: ${AppConstants.TopBarHeight(breakpoints.mobile)}px;
  /* padding-bottom: 2px; */
  display: flex;
  align-items: center;
  /* top: 0; */
  /* width: 100%; */
  z-index: ${zIndex('TopBarTabs')};
  justify-content: flex-start;
  overflow-y: scroll;

  ${media.tablet`
    height: ${AppConstants.TopBarHeight(breakpoints.tablet)}px;
    padding-left: ${padding(breakpoints.tablet)}px;
    padding-right: ${padding(breakpoints.tablet)}px;
    align-items: center;
  `};

  ${media.desktop`
    padding-left: ${padding(breakpoints.desktop)}px;
    padding-right: ${padding(breakpoints.desktop)}px;
  `};
`;

export default Wrapper;
