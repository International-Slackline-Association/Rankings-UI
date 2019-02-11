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
                <td>Discipline</td>
                <td>Total Prize Money</td>
                <td>Contest Type</td>
              </tr>
            </thead>
            <tbody>
              {items &&
                items.map(item => {
                  return (
                    <tr
                      // onClick={this.onTableRowClick(item)}
                      key={`${item.id}-${item.discipline.id}`}
                    >
                      <td>{item.date}</td>
                      <td>
                        <Group alignLeft={true}>
                          <ContestAvatar imageUrl={item.thumbnailUrl} />
                          <a
                            href={`/contest/${item.id}/${item.discipline.id}`}
                            onClick={this.onItemClick(
                              item.id,
                              item.discipline.id,
                            )}
                          >
                            {item.name}
                          </a>
                        </Group>
                      </td>
                      <td>{item.discipline.name}</td>
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
    width: 15%;
  }
  &:nth-child(4) {
    width: 15%;
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
    ${media.desktop`
      padding-left: 48px;
    `} &::before {
      content: 'Contest Name :';
    }
  }
  &:nth-child(3) {
    &::before {
      content: 'Discipline : ';
    }
  }
  &:nth-child(4) {
    &::before {
      content: 'Total Prize Money : ';
    }
  }
  &:nth-child(5) {
    &::before {
      content: 'Contest Type : ';
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
