import * as React from 'react';
// import PropTypes from 'prop-types';
import { rgba } from 'polished';
import media from 'styles/media';
import { injectIntl, intlShape } from 'react-intl';
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
  border-radius: 3px;
  position: relative;
  margin-bottom: 24px;

  table {
    width: 100%;
    text-align: center;

    thead {
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 600;
      /* background-color: ${props => props.theme.border}; */
      /* color: ${props => props.theme.textSecondary}; */
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
        border-bottom: 1px solid ${props => props.theme.border};

        ${media.desktop`
          display: table-row;
          padding-top: 0;
          border-bottom: none;
        `};

        &:nth-child(even) {
          background-color: ${props =>
            rgba(colors.paleWhite, 0.6)};
        }

        td {
          padding: 0;
          width: 100%;
          text-align: left;
          display: flex;
          align-items: center;
          margin-bottom: 12px;

          &:nth-child(1) { &::before { content: "${(props: IResultsWrapperProps) =>
            props.rankMsg} :"; }}
          &:nth-child(2) { &::before { content: "${props =>
            props.nameMsg} :"; }}
          &:nth-child(3) { &::before { content: "${props =>
            props.ageMsg} :"; }}
          &:nth-child(4) { &::before { content: "${props =>
            props.countryMsg} :"; }}
          &:nth-child(5) { &::before { content: "${props =>
            props.pointsMsg} :"; }}

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

// Transactions.propTypes = {
//   children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
//   intl: intlShape,
// };

export default injectIntl(Results);
