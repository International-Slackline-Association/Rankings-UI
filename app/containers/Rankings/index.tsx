/**
 *
 * Rankings
 *
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { selectSelectedFilters } from './selectors';
import reducer from './reducer';
import saga from './saga';

import { RootState, ContainerState, SearchSuggestion } from './types';
import TabPanel from 'components/TabPanel';
import MainTableSection, { SelectedFilters } from 'components/MainTableSection';
import SelectedFilterButton from 'components/SelectedFilterButton';
import MainTable from './MainTable';
import TableFilters from 'components/TableFilters';
import TableDropdownFilter from 'components/TableDropdownFilter';
import SideInfoBox from 'components/SideInfoBox';
import { defaultFilters } from './filters';
import TableSearchInput from 'components/TableSearchInput';

// tslint:disable-next-line:no-empty-interface
interface OwnProps {}

// tslint:disable-next-line:no-empty-interface
interface StateProps {
  selectedFilters: ContainerState['selectedFilters'];
}

// tslint:disable-next-line:no-empty-interface
interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps;

export class Rankings extends React.PureComponent<Props> {
  // private getFilters = () => {
  //   const categories = Object.keys(filters);
  //   categories.map(category => {
  //     return {
  //       category: category,
  //       items: filters[category],
  //     }
  //   })
  // };
  private filters = defaultFilters();
  constructor(props) {
    super(props);
  }

  private onLoadSearchSuggestions = (searchValue: string) => {
    //
  };

  private onClearSearchSuggestions = () => {
    //
  };

  private onSearchSuggestionSelected = (suggestion: SearchSuggestion) => {
    //
  };

  private onFilterItemSelected = (id: string) => {
    //
  };

  private onSelectedFilterCancelled = (id: string) => {
    //
  };

  private onTableRowSelected = (id: string) => {
    //
  };

  public render() {
    const { selectedFilters } = this.props;
    return (
      <TabPanel>
        <MainTableSection>
          <TableSearchInput
            placeholder={'Search Athlete'}
            loadSuggestions={this.onLoadSearchSuggestions}
            clearSuggestions={this.onClearSearchSuggestions}
            suggestionSelected={this.onSearchSuggestionSelected}
            suggestions={[]}
          />
          <TableFilters>
            {this.filters.map(filter => {
              return (
                <TableDropdownFilter
                  key={filter.category}
                  name={filter.category}
                  items={filter.items}
                  onItemSelected={this.onFilterItemSelected}
                />
              );
            })}
          </TableFilters>
          <SelectedFilters>
            {selectedFilters &&
              selectedFilters.map(selectedFilter => {
                return (
                  <SelectedFilterButton
                    id={selectedFilter.id}
                    name={selectedFilter.name}
                    onCancel={this.onSelectedFilterCancelled}
                  />
                );
              })}
          </SelectedFilters>
          <MainTable items={[]} onRowSelected={this.onTableRowSelected} isItemsLoading={false} />
        </MainTableSection>
        <SideInfoBox />
      </TabPanel>
    );
  }
}

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  selectedFilters: selectSelectedFilters(),
});

function mapDispatchToProps(dispatch: Dispatch, ownProps: OwnProps): DispatchProps {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer<OwnProps>({ key: 'rankings', reducer: reducer });
const withSaga = injectSaga<OwnProps>({ key: 'rankings', saga: saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Rankings);
