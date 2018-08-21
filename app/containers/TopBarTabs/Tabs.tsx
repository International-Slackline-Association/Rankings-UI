import styled, { colors } from 'styles/styled-components';
import { Tabs as React_Tabs } from 'react-tabs';
import media from 'styles/media';
import breakpoints from 'styles/breakpoints';
import AppConstants from 'styles/AppConstants';

// this component styling 3rd party react-tabs component
// https://github.com/reactjs/react-tabs

const Tabs = styled(React_Tabs)`
  .react-tabs__tab-list {
    list-style: none;
    margin: 0;
    padding: 0;
    height: ${AppConstants.TopBarHeight(breakpoints.mobile)}px;
    width: 100%;
    display: flex;
    ${media.tablet`
      height: ${AppConstants.TopBarHeight(breakpoints.tablet)}px;
    `};

    .react-tabs__tab {
      height: 100%;
      padding: 0 16px 0 16px;
      /* margin: 0px 0px 0px 16px; */
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 2px solid ${colors.white};
      color: ${props => props.theme.textSecondary};
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      /* transition: all 0.2s; */
      font-size: 12px;

      &:hover {
        color: ${props => props.theme.textPrimary};
      }

      &.react-tabs__tab--selected {
        color: ${props => props.theme.textPrimary};
        border-color: ${colors.red};
      }
      ${media.tablet`
        margin: 0;
        font-size: 16px;
      `};
    }
  }

  .react-tabs__tab-panel {
    display: none;

    &.react-tabs__tab-panel--selected {
      display: none;
    }
  }
`;

export default Tabs;
