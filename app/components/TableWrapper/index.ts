import { rgba } from 'polished';
import media from 'styles/media';
import styled, { colors } from 'styles/styled-components';

interface Props {
  tdCSS?: any;
  trCSS?: any;
  hideOnMobile?: boolean;
}

const TableWrapper = styled<Props, 'div'>('div')`
  position: relative;
  margin-bottom: 24px;
  display: ${props => (props.hideOnMobile ? 'none' : 'inherit')};
  ${media.tablet`
    display: inherit;
  `};
  table {
    width: 100%;
    text-align: center;
    thead {
      text-transform: uppercase;
      border-bottom: 1px solid ${props => props.theme.divider};
      font-size: 1em;
      color: ${props => props.theme.textSecondary};
      display: none;

      ${media.tablet`
        display: table-header-group;
      `};

      td {
        padding: 16px 0;
        &:nth-child(1) {
          width: 15%;
        }
        &:nth-child(2) {
          width: 20%;
        }
        &:nth-child(3) {
          width: 20%;
        }
        &:nth-child(4) {
          width: 20%;
        }
        &:nth-child(5) {
          width: 20%;
        }
        ${props => props.trCSS};
      }
    }

    tbody {
      position: relative;

      tr {
        display: flex;
        flex-wrap: wrap;
        padding-top: 12px;
        position: relative;
        border-bottom: 1px solid ${props => props.theme.divider};
        &:nth-child(even) {
          background-color: ${props => rgba(props.theme.appBackground, 1)};
        }

        ${media.tablet`
          display: table-row;
          padding-top: 0;
          &:nth-child(even) {
            background-color: transparent;
          }
        `};

        td#hide-mobile {
          display: none;
          ${media.tablet`
            display: table-cell;
          `};
        }

        td {
          padding: 0;
          width: 100%;
          text-align: left;
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          font-size: 1em;
          &::before {
            text-transform: uppercase;
            font-size: 1em;
            color: ${props => props.theme.textSecondary};
            min-width: 40%;
            width: 40%;
            display: block;
            padding-right: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: right;
          }

          ${media.tablet`
            padding: 14px 0;
            margin-bottom: 0px;
            width: auto;
            text-align: center;
            display: table-cell;
            a {
              color: inherit;
            }
            &::before {
              display: none;
            }
          `};
          ${props => props.tdCSS};
        }
      }
    }
  }
`;

export default TableWrapper;
