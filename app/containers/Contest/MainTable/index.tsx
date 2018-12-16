import * as React from 'react';
import styled, { colors, css } from 'styles/styled-components';
import media from 'styles/media';
import { SmallLoading } from 'components/Loading';
import ProfileAvatar from 'components/Icons/ProfileAvatar';
import CountryAvatar from 'components/Icons/CountryAvatar';
import TableWrapper from 'components/TableWrapper';
import Group from 'components/TableWrapper/Group';
import ShowMoreButton from 'components/Button/ShowMoreButton';
import { TableItemsResult } from '../types';
import { EmptyContainer } from 'components/Containers';

interface Props {
  tableItems: TableItemsResult;
  onRowSelected?(id: string): void;
  isItemsLoading: boolean | null;
  isNextItemsLoading: boolean | null;
  showMoreClicked(): void;
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

interface State {}

class MainTable extends React.PureComponent<Props, State> {
  public constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
  }
  private onTableRowClick = (item: TableItem) => {
    return () => {
      // this.props.onRowSelected(item.id);
    };
  };
  public render() {
    const { isItemsLoading, tableItems } = this.props;
    const { items, next } = tableItems;
    return (
      <Wrapper>
        <TableWrapper tdCSS={tableItemsPrefixCSS}>
          <table>
            <thead>
              <tr>
                <td title="Rank">Rank</td>
                <td title="Name">Name</td>
                <td title="Age">Age</td>
                <td title="Country">Country</td>
                <td title="Points">Points</td>
              </tr>
            </thead>
            <tbody>
              {items &&
                items.map(item => {
                  return (
                    <tr
                      // onClick={this.onTableRowClick(item)}
                      key={item.id}
                    >
                      <td>{item.rank}</td>
                      <td>
                        <Group alignLeft={true}>
                          <ProfileAvatar imageUrl={item.smallProfileUrl} />
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
            <SmallLoading minHeight={'100px'} />
          ) : !items || !items.length ? (
            <EmptyContainer minHeight={'100px'}>
              There is no data to display
              {/* <FormattedMessage {...messages.} /> */}
            </EmptyContainer>
          ) : null}
        </TableWrapper>
        {next && (
          <ShowMoreButton
            onClick={this.props.showMoreClicked}
            loading={this.props.isNextItemsLoading || false}
          >
            Show More
          </ShowMoreButton>
        )}
      </Wrapper>
    );
  }
}

const tableItemsPrefixCSS = css`
  &:nth-child(1) {
    &::before {
      content: 'Rank :';
    }
  }
  &:nth-child(2) {
    &::before {
      content: 'Name : ';
    }
  }
  &:nth-child(3) {
    &::before {
      content: 'Age : ';
    }
  }
  &:nth-child(4) {
    &::before {
      content: 'Country : ';
    }
  }
  &:nth-child(5) {
    &::before {
      content: 'Points : ';
    }
  }
`;

const Wrapper = styled.div`
  /* background-color: ${colors.green}; */
  width: 100%;
  height: 100%;

  ${media.tablet`

  `};

  ${media.desktop`

  `};
`;

export default MainTable;
