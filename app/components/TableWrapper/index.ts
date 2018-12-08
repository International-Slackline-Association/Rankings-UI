import { rgba } from 'polished';
import media from 'styles/media';
import styled, { colors } from 'styles/styled-components';

interface Props {
  tdCSS?: any;
  trCSS?: any;
}

const TableWrapper = styled<Props, 'div'>('div')`
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
        padding: 16px 0;
        &:nth-child(1) { width: 15%; }
        &:nth-child(2) { width: 17%; }
        &:nth-child(3) { width: 17%; }
        &:nth-child(4) { width: 17%; }
        &:nth-child(5) { width: 17%; }
        &:nth-child(6) { width: 17%; }
        ${props => props.trCSS}
      }
    }

    tbody {
      position: relative;

      tr {
        display: flex;
        flex-wrap: wrap;
        padding-top: 12px;
        border-bottom: 1px solid ${props => props.theme.divider};
        &:nth-child(even) {
          background-color: ${props => rgba(props.theme.appBackground, 1)};
        }


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
          ${props => props.tdCSS}


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

export default TableWrapper;
