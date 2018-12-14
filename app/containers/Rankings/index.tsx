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
  selectTableItems,
  selectIsTableItemsLoading,
  selectCategories,
  selectFilters,
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
} from 'components/InfoBox';
import Modal, { MobileOnlyModal } from 'components/Modal';
import {
  SelectedFilter,
  SearchSuggestion,
} from 'containers/GenericTabContent/types';
import { TopBarTabContentType } from 'types/enums';
import { replace } from 'connected-react-router';
import CategoriesFilters from 'components/CategoriesFilters';
import { ICategory, IFilter } from 'components/CategoriesFilters/types';

// tslint:disable-next-line:no-empty-interface
interface OwnProps {}

// tslint:disable-next-line:no-empty-interface
interface StateProps {
  categories: ContainerState['categories'];
  filters: ContainerState['filters'];
  tableItems: ContainerState['tableItems'];
  isTableItemsLoading: ContainerState['isTableItemsLoading'];
}

// tslint:disable-next-line:no-empty-interface
interface DispatchProps {
  dispatch: Dispatch;
  updateLocation(path: string, id: string);
}

type Props = StateProps & DispatchProps & OwnProps;

interface State {}

class Rankings extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);
    if (!this.props.tableItems || this.props.tableItems.length === 0) {
      this.props.dispatch(actions.loadTableItems());
      this.props.dispatch(actions.loadCategories());
    }
  }

  // private onLoadSearchSuggestions = (searchValue: string) => {
  //   this.props.dispatch(actions.loadSuggestions(searchValue));
  // };

  // private onClearSearchSuggestions = (value: string) => {
  //   if ((!value || value.length === 0) && this.props.selectedSearchInput) {
  //     this.props.dispatch(actions.clearSuggestions(true));
  //     this.props.dispatch(actions.loadTableItems());
  //   } else {
  //     this.props.dispatch(actions.clearSuggestions(false));
  //   }
  // };

  // private onSearchSuggestionSelected = (suggestion: SearchSuggestion) => {
  //   this.props.dispatch(actions.selectSuggestion(suggestion));
  //   this.props.dispatch(actions.loadTableItems());
  // };

  // private onFilterItemSelected = (id: string) => {
  //   const selectedFilter = this.findFilterById(id);
  //   if (selectedFilter) {
  //     selectedFilter.isSelected = true;
  //     const newFilters: SelectedFilter[] = [];
  //     for (const currentFilter of this.props.selectedFilters) {
  //       if (currentFilter.category !== selectedFilter.category) {
  //         newFilters.push(currentFilter);
  //       }
  //     }
  //     newFilters.push(selectedFilter);
  //     this.props.dispatch(actions.setSelectFilters(newFilters));
  //     this.props.dispatch(actions.loadTableItems());
  //   }
  // };

  // private onInfoBoxButtonClick = () => {
  //   const path = TopBarTabContentType.athlete;
  //   const idParam =
  //     this.state.selectedTableItem && this.state.selectedTableItem.id;
  //   if (idParam) {
  //     this.props.updateLocation(path, idParam);
  //   }
  // };

  private onCategorySelected = (index: number) => (value: string) => {
    console.log('Category: ', value, index);
    this.props.dispatch(actions.setCategorySelectedValue(index, value));
    this.props.dispatch(actions.loadTableItems());
  };

  private categories(): ICategory[] {
    const categories = this.props.categories;
    if (categories) {
      return categories.map((category, i) => {
        return {
          title: category.title,
          options: category.options,
          selectedValue: category.selectedValue,
          categorySelected: this.onCategorySelected(i),
        };
      });
    }
    return [];
  }

  private loadFilterSuggestions = (index: number) => (value: string) => {
    console.log('Filter Load: ', value, index);
  };

  private selectFilterSuggestion = (index: number) => (value: string) => {
    console.log('Filter Select: ', value, index);
  };

  private filters(): IFilter[] {
    const filters = this.props.filters;
    if (filters) {
      return filters.map((filter, i) => {
        const f: IFilter = {
          title: filter.title,
          placeholder: filter.placeholder,
          suggestions: filter.suggestions,
          loadSuggestions: this.loadFilterSuggestions(i),
          suggestionSelected: this.selectFilterSuggestion(i),
        };
        return f;
      });
    }
    return [];
  }

  public render() {
    const categories = this.categories();
    const filters = this.filters();
    const openCategories = (this.props.tableItems || []).length > 0 || categories.length > 0;
    return (
      <TabPanel>
        <CategoriesFilters
          isOpen={openCategories}
          categories={categories}
          filters={filters}
        />
        <MainTableSection>
          <MainTable
            items={this.props.tableItems}
            // onRowSelected={this.onTableRowSelected}
            isItemsLoading={this.props.isTableItemsLoading}
          />
        </MainTableSection>
      </TabPanel>
    );
  }
}

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  categories: selectCategories(),
  filters: selectFilters(),
  tableItems: selectTableItems(),
  isTableItemsLoading: selectIsTableItemsLoading(),
});

function mapDispatchToProps(
  dispatch: Dispatch,
  ownProps: OwnProps,
): DispatchProps {
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

const withReducer = injectReducer<OwnProps>({
  key: 'rankings',
  reducer: reducer,
});
const withSaga = injectSaga<OwnProps>({ key: 'rankings', saga: saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Rankings);
