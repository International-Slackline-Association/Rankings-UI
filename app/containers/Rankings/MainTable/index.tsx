import * as React from 'react';
import styled, { colors, css } from 'styles/styled-components';
import media from 'styles/media';
import { SmallLoading } from 'components/Loading';
import ProfileAvatar from 'components/Avatars/ProfileAvatar';
import CountryAvatar from 'components/Avatars/CountryAvatar';
import TableWrapper from 'components/TableWrapper';
import ShowMoreButton from 'components/LoadableButton/ShowMoreButton';
import { TableItemsResult } from '../types';
import { EmptyContainer } from 'components/Containers';
import RankingsTableWrapper from './RankingsTableWrapper';
import DivGroup from './DivGroup';
import { VerticalDivider } from 'components/Divider';
import Group from 'components/TableWrapper/Group';

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
  public constructor(props: Props) {
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
        <TableWrapper hideOnMobile>
          <table>
            <thead>
              <tr>
                <td title="Rank">Rank</td>
                <td title="Name">Name</td>
                <td title="Age">Age</td>
                <td title="Country">Country</td>
                <td title="Points">Points</td>
                <td title="Contests">Total Contests</td>
              </tr>
            </thead>
            <tbody>
              {items &&
                items.map((item, index) => {
                  const prevItem = items[index - 1];
                  return (
                    <tr key={item.id}>
                      <td>
                        {item.rank === null
                          ? '-'
                          : item.rank ||
                            (prevItem && prevItem.points === item.points
                              ? '“'
                              : index + 1)}
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
                      <td id="hide-mobile">{item.age || '-'}</td>
                      <td>
                        <Group>
                          <CountryAvatar code={item.country} />
                          {countryList.getName(item.country) || item.country}
                        </Group>
                      </td>
                      <td>{item.points} points</td>
                      <td id="hide-mobile">{item.contestCount || 'N/A'}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </TableWrapper>

        {/* Displayed in mobile only */}
        <RankingsTableWrapper>
          <table>
            <thead>
              <tr>
                <td>Rank</td>
                <td>Name</td>
              </tr>
            </thead>
            <tbody>
              {items &&
                items.map((item, index) => {
                  const prevItem = items[index - 1];
                  return (
                    <tr key={item.id}>
                      <td>
                        {item.rank === null
                          ? '-'
                          : item.rank ||
                            (prevItem && prevItem.points === item.points
                              ? '“'
                              : index + 1)}
                      </td>

                      <td>
                        <DivGroup>
                          <ProfileAvatar imageUrl={item.thumbnailUrl} />
                          <DivGroup vertical>
                            <a
                              href={`/athlete/${item.id}`}
                              onClick={this.onItemClick(item.id)}
                            >
                              {item.name + ' ' + item.surname}
                            </a>
                            <DivGroup>
                              <CountryAvatar small code={item.country} />
                              <div>
                                {countryList.getName(item.country) ||
                                  item.country}
                              </div>
                              <div> | {item.points} points</div>
                            </DivGroup>
                          </DivGroup>
                        </DivGroup>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </RankingsTableWrapper>
        {isItemsLoading ? (
          <SmallLoading minHeight={'100px'} />
        ) : !items || !items.length ? (
          <EmptyContainer minHeight={'100px'}>
            There is no data to display
          </EmptyContainer>
        ) : null}
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
