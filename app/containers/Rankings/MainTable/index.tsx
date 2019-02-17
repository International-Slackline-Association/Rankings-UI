import * as React from 'react';
import styled, { colors, css } from 'styles/styled-components';
import media from 'styles/media';
import { SmallLoading } from 'components/Loading';
import ProfileAvatar from 'components/Avatars/ProfileAvatar';
import CountryAvatar from 'components/Avatars/CountryAvatar';
import TableWrapper from 'components/TableWrapper';
import Group from 'components/TableWrapper/Group';
import ShowMoreButton from 'components/LoadableButton/ShowMoreButton';
import { TableItemsResult } from '../types';
import { EmptyContainer } from 'components/Containers';

const countryList = require('country-list');

interface Props {
  tableItems: TableItemsResult;
  onItemClick(id: string): void;
  isItemsLoading: boolean | null;
  isNextItemsLoading: boolean | null;
  showMoreClicked(): void;
}

interface State {}

class MainTable extends React.PureComponent<Props, State> {
  public constructor(props) {
    super(props);
  }
  private onItemClick = (id: string) => {
    return event => {
      event.preventDefault();
      this.props.onItemClick(id);
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
                items.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        {item.rank === null ? '-' : item.rank || index + 1}
                      </td>
                      <td>
                        <Group alignLeft={true}>
                          <ProfileAvatar imageUrl={item.thumbnailUrl} />

                          <a
                            href={`/athlete/${item.id}`}
                            onClick={this.onItemClick(item.id)}
                          >
                            {item.name + ' ' + item.surname}
                          </a>
                        </Group>
                      </td>
                      <td id="hide-mobile">{item.age}</td>
                      <td>
                        <Group>
                          <CountryAvatar code={item.country} />
                          {countryList.getName(item.country) || item.country}
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
    padding-left: 0px;
    ${media.desktop`
      padding-left: 48px;
    `} &::before {
      content: 'Name :';
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
