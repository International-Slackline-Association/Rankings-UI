import * as React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled, { colors } from 'styles/styled-components';
import media from 'styles/media';
import Results from './Results';
import Empty from './Empty';
import { SmallLoading } from 'components/Loading';

interface Props {
  items: TableItem[] | null;
  onRowSelected(id: string): void;
  isItemsLoading: boolean | null;
}

interface TableItem {
  id: string;
  rank: number;
  name: string;
  age: number;
  country: string;
  points: string;
}

class MainTable extends React.PureComponent<Props, {}> {
  public render() {
    const { isItemsLoading, items, onRowSelected } = this.props;
    return (
      <Wrapper>
        <Results>
          <table>
            <thead>
              <tr>
                <td title="Rank">
                  <FormattedMessage {...messages.theadRank} />
                </td>
                <td title="Name">
                  <FormattedMessage {...messages.theadName} />
                </td>
                <td title="Age">
                  <FormattedMessage {...messages.theadAge} />
                </td>
                <td title="Country">
                  <FormattedMessage {...messages.theadCountry} />
                </td>
                <td title="Points">
                  <FormattedMessage {...messages.theadPoints} />
                </td>
              </tr>
            </thead>
            <tbody>
              {items && items.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.rank}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.country}</td>
                    <td>{item.points}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {isItemsLoading ? (
            <Empty>
              <SmallLoading />
            </Empty>
          ) : !items || !items.length ? (
            <Empty>
              There is no data to display
              {/* <FormattedMessage {...messages.} /> */}
            </Empty>
          ) : null}
        </Results>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  /* background-color: ${colors.green}; */
  width: 100%;
  height: 100%;
  margin-top: 24px;

  ${media.tablet`

  `};

  ${media.desktop`

  `};
`;

export default MainTable;
