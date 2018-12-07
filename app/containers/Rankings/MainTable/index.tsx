import * as React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled, { colors } from 'styles/styled-components';
import media from 'styles/media';
import Results from './Results';
import Empty from './Empty';
import { SmallLoading } from 'components/Loading';
import ProfileAvatar from 'components/Icons/ProfileAvatar';
import Group from './Group';
import CountryAvatar from 'components/Icons/CountryAvatar';

interface Props {
  items: TableItem[] | null;
  onRowSelected(id: string): void;
  isItemsLoading: boolean | null;
}

interface TableItem {
  id: string;
  rank: number;
  name: string;
  surname: string;
  age: number;
  country: string;
  points: string;
}

interface State {
  selectedItem: TableItem | null;
}

class MainTable extends React.PureComponent<Props, State> {
  public constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
  }
  private onTableRowClick = (item: TableItem) => {
    return () => {
      this.setState({
        selectedItem: item,
      });
      this.props.onRowSelected(item.id);
    };
  };
  public render() {
    const { isItemsLoading, items } = this.props;
    return (
      <Wrapper>
        <Results selected>
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
              {items &&
                items.map(item => {
                  return (
                    <tr
                      onClick={this.onTableRowClick(item)}
                      key={item.id}
                      className={
                        item === this.state.selectedItem ? 'selected' : ''
                      }
                    >
                      <td>{item.rank}</td>
                      <td>
                        <Group alignLeft={true}>
                          <ProfileAvatar imageUrl={''} />
                          <a href="#">{item.name + ' ' + item.surname}</a>
                        </Group>
                      </td>
                      <td>{item.age}</td>
                      <td>
                        <Group>
                          <CountryAvatar code={item.country} />
                          {item.country}
                        </Group>
                      </td>
                      <td>{item.points} points</td>
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
  /* display: flex; */
  width: 100%;
  height: 100%;
  /* margin-top: 12px; */

  /* ${media.tablet`
  `};

  ${media.desktop`
  `}; */
`;

export default MainTable;
