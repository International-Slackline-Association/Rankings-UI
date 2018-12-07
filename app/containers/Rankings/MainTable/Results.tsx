import * as React from 'react';
// import PropTypes from 'prop-types';
import { rgba, lighten, darken, opacify } from 'polished';
import media from 'styles/media';
import { injectIntl } from 'react-intl';
import messages from './messages';
import styled, { colors } from 'styles/styled-components';

interface IResultsWrapperProps {
  rankMsg: string;
  ageMsg: string;
  nameMsg: string;
  countryMsg: string;
  pointsMsg: string;
}
const Wrapper = styled.div`
  /* border: 1px solid ${props => props.theme.border}; */
  /* background-color: ${colors.orange}; */
  /* border-radius: 3px; */
  position: relative;
  margin-bottom: 24px;

  table {
    width: 100%;
    text-align: center;
    /* border-top: 1px solid ${props => props.theme.border}; */
    /* border-bottom: 1px solid ${props => props.theme.border}; */
    thead {
      text-transform: uppercase;
      border-bottom: 1px solid ${props => props.theme.divider};
      font-size: 1em;
      /* font-weight: bold; */
      /* background-color: ${props =>
        props.theme.componentBackgroundSecondary}; */
      color: ${props => props.theme.textSecondary};
      display: none;

      ${media.desktop`
        display: table-header-group;
      `};

      td {
        /* margin-bottom: 8px; */
        padding: 16px 0;
        &:nth-child(1) { width: 15%; }
        &:nth-child(2) { width: 17%; }
        &:nth-child(3) { width: 17%; }
        &:nth-child(4) { width: 17%; }
        &:nth-child(5) { width: 17%; }
        &:nth-child(6) { width: 17%; }
      }
    }

    tbody {
      position: relative;

      tr {
        display: flex;
        flex-wrap: wrap;
        padding-top: 12px;
        border-bottom: 1px solid ${props => props.theme.divider};
        /* cursor: pointer; */
        &:nth-child(even) {
          background-color: ${props => rgba(props.theme.appBackground, 1)};
        }

        ${media.tablet`
          &:active {
            color: ${props => lighten(0.11, props.theme.textPrimary)};
          }
          &:focus {
            color: ${props => lighten(0.11, props.theme.textPrimary)};
          }

        `};

        ${media.desktop`
          display: table-row;
          padding-top: 0;
          /* border-bottom: none; */

          &:nth-child(even) {
            background-color: transparent;
          }
        `};

        td {
          padding: 0;
          width: 100%;
          text-align: left;
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          font-size: 1em;
          &:nth-child(1) {
            &::before {
              content: "${(props: IResultsWrapperProps) => props.rankMsg} :";
            };
          }
          &:nth-child(2) {
            &::before {
              content: "${props => props.nameMsg} : ";
            };
          }

          &:nth-child(3) {
            &::before {
              content: "${props => props.ageMsg} : ";
            };
          }

          &:nth-child(4) {
            &::before {
              content: "${props => props.countryMsg} : ";
            };
          }

          &:nth-child(5) {
            &::before {
              content: "${props => props.pointsMsg} : ";
            };
          }
          &::before {
            display: block;
            text-transform: uppercase;
            font-size: 1em;
            color: ${props => props.theme.textSecondary};
            width: 40%;
            display: block;
            padding-right: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: right
          }

          ${media.tablet`
            width: 50%;
          `};

          ${media.desktop`
            padding: 14px 0;
            width: auto;
            text-align: center;
            display: table-cell;
            a {
              color: inherit
            }
            &::before {
              display: none;
            }
          `};
        }
      }
    }
  }
`;
function Results(props) {
  return (
    <Wrapper
      rankMsg={props.intl.formatMessage(messages.theadRank)}
      nameMsg={props.intl.formatMessage(messages.theadName)}
      ageMsg={props.intl.formatMessage(messages.theadAge)}
      countryMsg={props.intl.formatMessage(messages.theadCountry)}
      pointsMsg={props.intl.formatMessage(messages.theadPoints)}
    >
      {props.children}
    </Wrapper>
  );
}

export default injectIntl(Results);
