import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';
import { RootState, ContainerState } from './types';
import TabPanel from 'components/TabPanel';
import MainTableSection from 'components/MainTableSection';
import MainTable from './MainTable';
import * as actions from './actions';
import { replace, push } from 'connected-react-router';
import CategoriesFilters from 'components/CategoriesFilters';
import { ICategory, IFilter } from 'components/CategoriesFilters/types';
import { ISelectOption } from 'types/application';
import Footer from 'components/Footer';

interface OwnProps {}

interface StateProps {
  categories: ContainerState['categories'];
  athleteFilter: ContainerState['athleteFilter'];
  countryFilter: ContainerState['countryFilter'];
  tableResult: ContainerState['tableResult'];
  isTableItemsLoading: ContainerState['isTableItemsLoading'];
  isNextTableItemsLoading: ContainerState['isNextTableItemsLoading'];
}

interface DispatchProps {
  dispatch: Dispatch;
  updateLocation(path: string, id: string): void;
}

type Props = StateProps & DispatchProps & OwnProps;

interface State {}

class Rankings extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);
    if (!this.props.tableResult || this.props.tableResult.items.length === 0) {
      this.props.dispatch(actions.loadTableItems());
    }
    if (!this.props.categories) {
      this.props.dispatch(actions.loadCategories());
    }
  }

  private onCategorySelected = (index: number) => (value: string) => {
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

  private loadAthleteSuggestions = (value: string) => {
    this.props.dispatch(actions.loadAthleteSuggestions(value));
  };

  private selectAthleteSuggestion = (suggestion: ISelectOption) => {
    this.props.dispatch(actions.setAthleteFilterSelectedValue(suggestion));
    this.props.dispatch(actions.loadTableItems());
  };

  private loadCountrySuggestions = (value: string) => {
    this.props.dispatch(actions.loadCountrySuggestions(value));
  };

  private selectCountrySuggestion = (suggestion: ISelectOption) => {
    this.props.dispatch(actions.setCountryFilterSelectedValue(suggestion));
    this.props.dispatch(actions.loadTableItems());
  };

  private onAthleteClick = (id: string) => {
    this.props.updateLocation('athlete', id);
  };

  private filters(): IFilter[] {
    const athleteFilter: IFilter = {
      title: 'Athlete',
      placeholder: 'First name of the athlete',
      loadSuggestions: this.loadAthleteSuggestions,
      suggestionSelected: this.selectAthleteSuggestion,
      suggestions: this.props.athleteFilter.suggestions,
      selectedOption: this.props.athleteFilter.selectedValue,
    };

    const countryFilter: IFilter = {
      title: 'Country',
      placeholder: 'Country Code',
      loadSuggestions: this.loadCountrySuggestions,
      suggestionSelected: this.selectCountrySuggestion,
      suggestions: this.props.countryFilter.suggestions,
      selectedOption: this.props.countryFilter.selectedValue,
    };

    return [athleteFilter, countryFilter];
  }

  private loadMoreItems = () => {
    this.props.dispatch(actions.loadNextItems());
  };

  public render() {
    const categories = this.categories();
    const filters = this.filters();
    const openCategories =
      (this.props.tableResult.items || []).length > 0 || categories.length > 0;
    return (
      <React.Fragment>
        <TabPanel>
          <CategoriesFilters
            isOpen={openCategories}
            categories={categories}
            filters={filters}
          />
          <MainTableSection>
            <MainTable
              tableItems={this.props.tableResult}
              onItemClick={this.onAthleteClick}
              isItemsLoading={this.props.isTableItemsLoading}
              showMoreClicked={this.loadMoreItems}
              isNextItemsLoading={this.props.isNextTableItemsLoading}
            />
          </MainTableSection>
        </TabPanel>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  categories: selectors.selectCategories(),
  athleteFilter: selectors.selectAthleteFilter(),
  countryFilter: selectors.selectCountryFilter(),
  tableResult: selectors.selectTableResult(),
  isTableItemsLoading: selectors.selectIsTableItemsLoading(),
  isNextTableItemsLoading: selectors.selectIsNextTableItemsLoading(),
});

function mapDispatchToProps(
  dispatch: Dispatch,
  ownProps: OwnProps,
): DispatchProps {
  return {
    dispatch: dispatch,
    updateLocation: (path: string, id: string) => {
      if (id) {
        dispatch(push(`/${path}/${id}`));
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
