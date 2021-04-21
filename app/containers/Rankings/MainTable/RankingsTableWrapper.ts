import { rgba } from 'polished';
import media from 'styles/media';
import styled, { colors } from 'styles/styled-components';

interface Props {
  tdCSS?: any;
  trCSS?: any;
}

const RankingsTableWrapper = styled<Props, 'div'>('div')`
  margin-bottom: 24px;
  display: flex;
  table {
    ${media.tablet`
      display: none;
    `};
    width: 100%;
    text-align: center;
    thead {
      text-transform: uppercase;

      border-bottom: 1px solid ${props => props.theme.divider};
      font-size: 1em;
      color: ${props => props.theme.textSecondary};
      display: table-header-group;
      tr {
        display: table-row;
        td {
          padding: 16px 0;
          &:nth-child(1) {
            width: 15%;
          }
          &:nth-child(2) {
            width: 85%;
          }
        }
      }
    }

    tbody {
      tr {
        display: table-row;
        /* flex-wrap: wrap; */
        padding-top: 12px;
        border-bottom: 1px solid ${props => props.theme.divider};
        &:nth-child(even) {
          background-color: ${props => rgba(props.theme.appBackground, 1)};
        }

        td {
          padding: 12px 0;
          /* width: 100%; */
          display: table-cell;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          font-size: 1em;
        }
      }
    }
  }
`;

export default RankingsTableWrapper;
