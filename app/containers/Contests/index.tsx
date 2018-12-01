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
  selectDropdownFilters,
  selectSelectedSearchInput,
  selectTableItems,
  selectIsTableItemsLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

import { RootState, ContainerState, TableItem } from './types';
import TabPanel from 'components/TabPanel';
import MainTableSection, { SelectedFilters } from 'components/MainTableSection';
import SelectedFilterButton from 'components/SelectedFilterButton';
import MainTable from './MainTable';
import TableFilters from 'components/TableFilters';
import TableDropdownFilter from 'components/TableDropdownFilter';
import TableSearchInput from 'components/TableSearchInput';
import * as actions from './actions';
import {
  SideInfoBoxAthlete,
  ModalInfoBoxAthlete,
  SideInfoBoxRankings,
  SideInfoBoxContest,
  SideInfoBoxContests,
  ModalInfoBoxContest,
} from 'components/InfoBox';
import Modal, { MobileOnlyModal } from 'components/Modal';
import { SelectedFilter, SearchSuggestion } from 'containers/GenericTabContent/types';
import { TopBarTabContentType } from 'types/enums';
import { replace } from 'connected-react-router';

// tslint:disable-next-line:no-empty-interface
interface OwnProps {}

// tslint:disable-next-line:no-empty-interface
interface StateProps {
  selectedFilters: ContainerState['selectedFilters'];
  suggestions: ContainerState['suggestions'];
  selectedSearchInput: ContainerState['selectedSearchInput'];
  tableItems: ContainerState['tableItems'];
  isTableItemsLoading: ContainerState['isTableItemsLoading'];
  dropdownFilters: ContainerState['dropdownFilters'];
}

// tslint:disable-next-line:no-empty-interface
interface DispatchProps {
  dispatch: Dispatch;
  updateLocation(path: string, id: string);
}

type Props = StateProps & DispatchProps & OwnProps;

interface State {
  selectedTableItem?: TableItem;
  isModalOpen: boolean;
}

class Contests extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      selectedTableItem: undefined,
    };
    this.closeModal = this.closeModal.bind(this);
    if (!this.props.tableItems || this.props.tableItems.length === 0) {
      this.props.dispatch(actions.loadTableItems());
    }
  }

  private closeModal() {
    this.setState(state => {
      return {
        ...this.state,
        isModalOpen: false,
      };
    });
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

  private findTableItemById = (id: string) => {
    if (!this.props.tableItems) {
      return undefined;
    }
    return this.props.tableItems.find(item => item.id === id);
  };

  private removeFromSelectedFilters(item: SelectedFilter) {
    return this.props.selectedFilters.filter(f => f !== item);
  }

  private onLoadSearchSuggestions = (searchValue: string) => {
    this.props.dispatch(actions.loadSuggestions(searchValue));
  };

  private onClearSearchSuggestions = (value: string) => {
    if ((!value || value.length === 0) && this.props.selectedSearchInput) {
      this.props.dispatch(actions.clearSuggestions(true));
      this.props.dispatch(actions.loadTableItems());
    } else {
      this.props.dispatch(actions.clearSuggestions(false));
    }
  };

  private onSearchSuggestionSelected = (suggestion: SearchSuggestion) => {
    this.props.dispatch(actions.selectSuggestion(suggestion));
    this.props.dispatch(actions.loadTableItems());
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
      this.props.dispatch(actions.loadTableItems());
    }
  };

  private onSelectedFilterCancelled = (id: string) => {
    const cancelledFilter = this.findSelectedFilterById(id);
    if (cancelledFilter) {
      const newFilters = this.removeFromSelectedFilters(cancelledFilter);
      this.props.dispatch(actions.setSelectFilters(newFilters));
      this.props.dispatch(actions.loadTableItems());
    }
  };

  private onTableRowSelected = (id: string) => {
    const selectedItem = this.findTableItemById(id);
    if (selectedItem) {
      this.setState({
        selectedTableItem: selectedItem,
        isModalOpen: true,
      });
    }
  };

  private onInfoBoxButtonClick = () => {
    const path = TopBarTabContentType.contest;
    const idParam = this.state.selectedTableItem && this.state.selectedTableItem.id;
    if (idParam) {
      this.props.updateLocation(path, idParam);
    }
  };

  public render() {
    const { selectedFilters } = this.props;
    const selectedTableItem = this.state && this.state.selectedTableItem;
    return (
      <TabPanel>
        <MainTableSection>
          <TableSearchInput
            placeholder={'Search Contest'}
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
            items={this.props.tableItems}
            onRowSelected={this.onTableRowSelected}
            isItemsLoading={this.props.isTableItemsLoading}
          />
        </MainTableSection>
        {selectedTableItem ? (
          <SideInfoBoxContest onButtonClick={this.onInfoBoxButtonClick} item={selectedTableItem} />
        ) : (
          <SideInfoBoxContests />
        )}
        {selectedTableItem && (
          <MobileOnlyModal isOpen={this.state.isModalOpen} onRequestClose={this.closeModal}>
            <ModalInfoBoxContest large onButtonClick={this.onInfoBoxButtonClick} item={selectedTableItem} />
          </MobileOnlyModal>
        )}
      </TabPanel>
    );
  }
}

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  selectedFilters: selectSelectedFilters(),
  suggestions: selectSuggestions(),
  selectedSearchInput: selectSelectedSearchInput(),
  tableItems: selectTableItems(),
  isTableItemsLoading: selectIsTableItemsLoading(),
  dropdownFilters: selectDropdownFilters(),
});

function mapDispatchToProps(dispatch: Dispatch, ownProps: OwnProps): DispatchProps {
  return {
    dispatch: dispatch,
    updateLocation: (path: string, id: string) => {
      if (id) {
        dispatch(replace(`/${path}/${id}`));
      }
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer<OwnProps>({ key: 'contests', reducer: reducer });
const withSaga = injectSaga<OwnProps>({ key: 'contests', saga: saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Contests);
