import * as React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled, { colors, css } from 'styles/styled-components';
import media from 'styles/media';
import Results from './Results';
import Empty from './Empty';
import { SmallLoading } from 'components/Loading';
import TableWrapper from 'components/TableWrapper';
import Group from 'components/TableWrapper/Group';
import ContestAvatar from 'components/Icons/ContestAvatar';

interface Props {
  items: TableItem[] | null;
  onRowSelected(id: string): void;
  isItemsLoading: boolean | null;
}

interface TableItem {
  id: string;
  name: string;
  discipline: string;
  prize: string;
  size: string;
  date: string;
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
        <TableWrapper tdCSS={tableItemsPrefixCSS} trCSS={tableItemsRatioCSS}>
          <table>
            <thead>
              <tr>
                <td>
                  <FormattedMessage {...messages.theadName} />
                </td>
                <td>
                  <FormattedMessage {...messages.theadDiscipline} />
                </td>
                <td>
                  <FormattedMessage {...messages.theadPrize} />
                </td>
                <td>
                  <FormattedMessage {...messages.theadSize} />
                </td>
                <td>
                  <FormattedMessage {...messages.theadDate} />
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
                      <td>
                        <Group alignLeft={true}>
                          <ContestAvatar imageUrl={''} />
                          <a href="#">{item.name}</a>
                        </Group>
                      </td>
                      <td>{item.discipline}</td>
                      <td>{item.prize}</td>
                      <td>{item.size}</td>
                      <td>{item.date}</td>
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
        </TableWrapper>
      </Wrapper>
    );
  }
}

const tableItemsRatioCSS = css`
  &:nth-child(1) {
    width: 20%;
    text-align: left;
    padding-left: 48px;
  }
  &:nth-child(2) {
    width: 15%;
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
    padding-left: 0px;
    ${media.desktop`
      padding-left: 48px;
    `} &::before {
      content: 'Name :';
    }
  }
  &:nth-child(2) {
    &::before {
      content: 'Discipline : ';
    }
  }
  &:nth-child(3) {
    &::before {
      content: 'Prize : ';
    }
  }
  &:nth-child(4) {
    &::before {
      content: 'Size : ';
    }
  }
  &:nth-child(5) {
    &::before {
      content: 'Date : ';
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
