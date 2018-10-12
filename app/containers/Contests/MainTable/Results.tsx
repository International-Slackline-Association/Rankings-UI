import * as React from 'react';
// import PropTypes from 'prop-types';
import { rgba, lighten, darken } from 'polished';
import media from 'styles/media';
import { injectIntl } from 'react-intl';
import messages from './messages';
import styled, { colors } from 'styles/styled-components';

interface WrapperProps {
  nameMsg: string;
  disciplineMsg: string;
  prizeMsg: string;
  sizeMsg: string;
  dateMsg: string;
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
      /* border-bottom: 2px solid ${props => props.theme.border}; */
      font-size: 1.2em;
      font-weight: bold;
      background-color: ${props => props.theme.componentBackgroundSecondary};
      color: ${props => props.theme.textInverted};
      display: none;

      ${media.desktop`
        display: table-header-group;
      `};

      td {
        padding: 8px 0;
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
        border-bottom: 2px solid ${props => props.theme.border};
        /* cursor: pointer; */
        &.selected {
          font-weight: bold;
          color: ${darken(0.11, colors.isaRed)};
        }
        ${media.tablet`
          transition:0.25s;
          &:hover {
            transform:scale(1.01,1.01);
            transform-origin:center;
            font-weight: bold;
          }

          &:active {
            color: ${props => lighten(0.11, props.theme.textPrimary)};
          }
          &:focus {
            color: ${props => lighten(0.11, props.theme.textPrimary)};
          }

          &:nth-child(even) {
            /* background-color: ${props => rgba(props.theme.appBackground, 0.6)}; */
          }
        `};

        ${media.desktop`
          display: table-row;
          padding-top: 0;
          border-bottom: none;
        `};

        td {
          padding: 0;
          width: 100%;
          text-align: left;
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          font-size: 1.25rem;
          &:nth-child(1) { &::before { content: "${(props: WrapperProps) => props.nameMsg} :"; }}
          &:nth-child(2) { &::before { content: "${props => props.disciplineMsg} : "; }}
          &:nth-child(3) { &::before { content: "${props => props.prizeMsg} : "; }}
          &:nth-child(4) { &::before { content: "${props => props.sizeMsg} : "; }}
          &:nth-child(5) { &::before { content: "${props => props.dateMsg} : "; }}
          &::before {
            display: block;
            text-transform: uppercase;
            font-size: 12px;
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
      nameMsg={props.intl.formatMessage(messages.theadName)}
      disciplineMsg={props.intl.formatMessage(messages.theadDiscipline)}
      prizeMsg={props.intl.formatMessage(messages.theadPrize)}
      sizeMsg={props.intl.formatMessage(messages.theadSize)}
      dateMsg={props.intl.formatMessage(messages.theadDate)}
    >
      {props.children}
    </Wrapper>
  );
}

export default injectIntl(Results);
