import * as React from 'react';
import styled, { colors, css } from 'styles/styled-components';
import media from 'styles/media';
import { SmallLoading } from 'components/Loading';
import TableWrapper from 'components/TableWrapper';
import Group from 'components/TableWrapper/Group';
import ContestAvatar from 'components/Avatars/ContestAvatar';
import { EmptyContainer } from 'components/Containers';
import { TableItemsResult } from '../types';
import ShowMoreButton from 'components/LoadableButton/ShowMoreButton';
import CountryAvatar from 'components/Avatars/CountryAvatar';
import StackedGroup from './StackedGroup';
import CaptionText from './CaptionText';
import DisciplineIcon from 'components/Icons/categories/DisciplineIcon';

const countryList = require('country-list');

interface Props {
  tableItems: TableItemsResult;
  onItemClick(id: string, discipline: number): void;
  isItemsLoading: boolean | null;
  isNextItemsLoading: boolean | null;
  showMoreClicked(): void;
}

interface State {}

class MainTable extends React.PureComponent<Props, State> {
  public constructor(props) {
    super(props);
  }
  private onItemClick = (id: string, discipline: number) => {
    return event => {
      event.preventDefault();
      this.props.onItemClick(id, discipline);
    };
  };
  public render() {
    const { isItemsLoading, tableItems } = this.props;
    const { items, next } = tableItems;
    return (
      <Wrapper>
        <TableWrapper tdCSS={tableItemsPrefixCSS} trCSS={tableItemsRatioCSS}>
          <table>
            <thead>
              <tr>
                <td>Start Date</td>
                <td>Contest Name</td>
                <td>Country</td>
                <td>Discipline</td>
                <td>Total Prize Money</td>
                <td>Contest Size</td>
              </tr>
            </thead>
            <tbody>
              {items &&
                items.map(item => {
                  return (
                    <tr key={`${item.id}-${item.discipline.id}`}>
                      <td>{item.date}</td>
                      <td>
                        <Group alignLeft={true}>
                          <ContestAvatar imageUrl={item.thumbnailUrl} />
                          <StackedGroup>
                            <a
                              href={`/contest/${item.id}/${item.discipline.id}`}
                              onClick={this.onItemClick(
                                item.id,
                                item.discipline.id,
                              )}
                            >
                              {item.name}
                            </a>
                            <CaptionText
                              resultsAvailable={item.resultsAvailable}
                              gender={item.contestGender}
                            />
                          </StackedGroup>
                        </Group>
                      </td>
                      <td>
                        <Group>
                          <CountryAvatar code={item.country} />
                          {countryList.getName(item.country) || item.country}
                        </Group>
                      </td>
                      <td>
                        <Group alignLeft={true}>
                          <DisciplineIcon value={item.discipline.id.toString()} />
                          {item.discipline.name}
                        </Group>
                      </td>
                      <td id="hide-mobile">{item.prize}</td>
                      <td>{item.contestType.name}</td>
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

const tableItemsRatioCSS = css`
  &:nth-child(1) {
    width: 15%;
  }
  &:nth-child(2) {
    width: 20%;
    text-align: left;
    padding-left: 48px;
  }
  &:nth-child(3) {
    width: 12%;
  }
  &:nth-child(4) {
    width: 18%;
    text-align: left;
    padding-left: 48px;
  }
  &:nth-child(5) {
    width: 15%;
  }
  &:nth-child(6) {
    width: 15%;
  }
`;

const tableItemsPrefixCSS = css`
  &:nth-child(1) {
    &::before {
      content: 'Start Date : ';
    }
  }
  &:nth-child(2) {
    padding-left: 0px;
    ${media.tablet`
      padding-left: 24px;
    `} &::before {
      content: 'Contest Name :';
    }
  }
  &:nth-child(3) {
    display: flex;
    &::before {
      content: 'Country :';
      ${media.tablet`
        display: block;
        min-width: 25%;
        width: 25%;
        content: '';
      `};
    }
  }

  &:nth-child(4) {
    padding-left: 0px;
    ${media.tablet`
      padding-left: 24px;
    `} &::before {
      content: 'Discipline :';
    }
  }
  &:nth-child(5) {
    &::before {
      content: 'Total Prize Money :';
    }
  }
  &:nth-child(6) {
    &::before {
      content: 'Contest Size :';
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
