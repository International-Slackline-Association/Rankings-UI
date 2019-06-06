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
import RankUpIcon from '../../../components/Icons/rankUpIcon';
import RankDownIcon from '../../../components/Icons/rankDownIcon';
import RankNoChangeIcon from '../../../components/Icons/rankNoChangeIcon';
import RankChangeIcon from './RankChangeIcon';

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
        <TableWrapper
          hideOnMobile
          trCSS={tableItemsRatioCSS}
          tdCSS={tableItemsPrefixCSS}
        >
          <table>
            <thead>
              <tr>
                <td>Rank</td>
                <td title="Change in the rank with the last contest">Δ</td>
                <td>Name</td>
                <td>Age</td>
                <td>Country</td>
                <td>Points</td>
                <td>Total Contests</td>
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
                      <td title="Change in the rank with the last contest">
                        <RankChangeIcon changeInRank={item.changeInRank} />
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
                <td>Δ</td>
                <td>Name</td>
              </tr>
            </thead>
            <tbody>
              {items &&
                items.map((item, index) => {
                  const prevItem = items[index - 1];
                  const rank =
                    item.rank === null
                      ? '-'
                      : item.rank ||
                        (prevItem && prevItem.points === item.points
                          ? '“'
                          : index + 1);
                  return (
                    <tr key={item.id}>
                      <td>
                        {rank}
                      </td>
                      <td>
                        <RankChangeIcon changeInRank={item.changeInRank} />
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

const tableItemsRatioCSS = css`
  &:nth-child(1) {
    width: 10%;
  }
  &:nth-child(2) {
    width: 5%;
  }
  &:nth-child(3) {
    width: 25%;
  }
  &:nth-child(4) {
    width: 10%;
  }
  &:nth-child(5) {
    width: 20%;
  }
  &:nth-child(6) {
    width: 20%;
  }
  &:nth-child(6) {
    width: 10%;
  }
`;

const tableItemsPrefixCSS = css`
  &:nth-child(3) {
    display: flex;
    &::before {
      display: block;
      min-width: 25%;
      width: 25%;
      content: '';
    }
  }
  &:nth-child(5) {
    display: flex;
    &::before {
      display: block;
      min-width: 33%;
      width: 33%;
      content: '';
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
