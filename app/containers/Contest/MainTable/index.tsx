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
                <td>
                  <FormattedMessage {...messages.theadRank} />
                </td>
                <td>
                  <FormattedMessage {...messages.theadName} />
                </td>
                <td>
                  <FormattedMessage {...messages.theadAge} />
                </td>
                <td>
                  <FormattedMessage {...messages.theadCountry} />
                </td>
                <td>
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
                      className={item === this.state.selectedItem ? 'selected' : ''}
                    >
                      <td>{item.rank}</td>
                      <td>{item.name + ' ' + item.surname}</td>
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
