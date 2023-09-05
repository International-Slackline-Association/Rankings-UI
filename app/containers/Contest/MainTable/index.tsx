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

const countryList = require('country-code-lookup');

interface Props {
  tableItems: TableItemsResult;
  onItemClick(id: string): void;
  isItemsLoading: boolean | null;
  isNextItemsLoading: boolean | null;
  showMoreClicked(): void;
}

interface State {}

class MainTable extends React.PureComponent<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
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
                <td>Rank</td>
                <td>Name</td>
                <td>Age</td>
                <td>Country</td>
                <td>Points</td>
              </tr>
            </thead>
            <tbody>
              {items &&
                items.map((item, index) => {
                  const prevItem = items[index - 1];
                  return (
                    <tr key={item.id}>
                      <td>
                        {prevItem && prevItem.points === item.points
                          ? '“'
                          : index + 1}
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
                      <td>{item.age || '-'}</td>
                      <td>
                        <Group>
                          <CountryAvatar code={item.country} />
                          {countryList.byIso(item.country).country || item.country}
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
