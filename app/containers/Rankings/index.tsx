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
import {
  selectSelectedFilters,
  selectSuggestions,
  selectRankingItems,
  selectIsRankingsLoading,
  selectDropdownFilters,
  selectSelectedSearchInput,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

import { RootState, ContainerState, SearchSuggestion, SelectedFilter } from './types';
import TabPanel from 'components/TabPanel';
import MainTableSection, { SelectedFilters } from 'components/MainTableSection';
import SelectedFilterButton from 'components/SelectedFilterButton';
import MainTable from './MainTable';
import TableFilters from 'components/TableFilters';
import TableDropdownFilter from 'components/TableDropdownFilter';
import AthleteSideInfoBox from 'components/AthleteSideInfoBox';
import { defaultFilters } from './filters';
import TableSearchInput from 'components/TableSearchInput';
import * as actions from './actions';

// tslint:disable-next-line:no-empty-interface
interface OwnProps {}

// tslint:disable-next-line:no-empty-interface
interface StateProps {
  selectedFilters: ContainerState['selectedFilters'];
  suggestions: ContainerState['suggestions'];
  selectedSearchInput: ContainerState['selectedSearchInput'];
  rankingItems: ContainerState['tableItems'];
  isRankingsLoading: ContainerState['isRankingsLoading'];
  dropdownFilters: ContainerState['dropdownFilters'];
}

// tslint:disable-next-line:no-empty-interface
interface DispatchProps {
  dispatch: Dispatch;
}

type Props = StateProps & DispatchProps & OwnProps;

class Rankings extends React.PureComponent<Props> {

  constructor(props) {
    super(props);
    this.props.dispatch(actions.loadRankings());
  }

  private findFilterById = (id: string) => {
    for (const filterCategory of this.props.dropdownFilters) {
      for (const filter of filterCategory.items) {
        if (filter.id === id) {
          return filter;
        }
      }
    }
    return null;
  };
  private findSelectedFilterById = (id: string) => {
    for (const filter of this.props.selectedFilters) {
      if (filter.id === id) {
        return filter;
      }
    }
    return null;
  };

  private removeFromSelectedFilters(item: SelectedFilter) {
    return this.props.selectedFilters.filter(f => f !== item);
  }

  private onLoadSearchSuggestions = (searchValue: string) => {
    this.props.dispatch(actions.loadSuggestions(searchValue));
  };

  private onClearSearchSuggestions = () => {
    this.props.dispatch(actions.clearSuggestions());
    if (this.props.selectedSearchInput) {
      this.props.dispatch(actions.loadRankings());
    }
  };

  private onSearchSuggestionSelected = (suggestion: SearchSuggestion) => {
    this.props.dispatch(actions.selectSuggestion(suggestion));
    this.props.dispatch(actions.loadRankings());
  };

  private onFilterItemSelected = (id: string) => {
    const selectedFilter = this.findFilterById(id);
    if (selectedFilter) {
      selectedFilter.isSelected = true;
      const newFilters: SelectedFilter[] = [];
      for (const currentFilter of this.props.selectedFilters) {
        if (currentFilter.category !== selectedFilter.category) {
          newFilters.push(currentFilter);
        }
      }
      newFilters.push(selectedFilter);
      this.props.dispatch(actions.setSelectFilters(newFilters));
      this.props.dispatch(actions.loadRankings());
    }
  };

  private onSelectedFilterCancelled = (id: string) => {
    const cancelledFilter = this.findSelectedFilterById(id);
    if (cancelledFilter) {
      const newFilters = this.removeFromSelectedFilters(cancelledFilter);
      this.props.dispatch(actions.setSelectFilters(newFilters));
      this.props.dispatch(actions.loadRankings());
    }
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
            suggestions={this.props.suggestions}
          />
          <TableFilters>
            {this.props.dropdownFilters.map(filter => {
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
                    key={selectedFilter.id}
                    id={selectedFilter.id}
                    name={selectedFilter.name}
                    isDisabled={selectedFilter.isSticky}
                    onCancel={this.onSelectedFilterCancelled}
                  />
                );
              })}
          </SelectedFilters>
          <MainTable
            items={this.props.rankingItems}
            onRowSelected={this.onTableRowSelected}
            isItemsLoading={this.props.isRankingsLoading}
          />
        </MainTableSection>
        <AthleteSideInfoBox />
      </TabPanel>
    );
  }
}

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  selectedFilters: selectSelectedFilters(),
  suggestions: selectSuggestions(),
  selectedSearchInput: selectSelectedSearchInput(),
  rankingItems: selectRankingItems(),
  isRankingsLoading: selectIsRankingsLoading(),
  dropdownFilters: selectDropdownFilters(),
});

function mapDispatchToProps(dispatch: Dispatch, ownProps: OwnProps): DispatchProps {
  return {
    dispatch: dispatch,
  };
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
