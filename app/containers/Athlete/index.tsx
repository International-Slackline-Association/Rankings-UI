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
import { RouteProps, RouteComponentProps } from 'react-router';
import { replace, push } from 'connected-react-router';
import Header from './Header';
import AthleteInfo from './Info';
import CategoriesFilters from 'components/CategoriesFilters';
import { ICategory } from 'components/CategoriesFilters/types';

interface OwnProps extends RouteComponentProps {}

interface StateProps {
  readonly id: string;
  readonly athlete: ContainerState['athlete'];
  readonly isAthleteLoading: ContainerState['isAthleteLoading'];
  readonly categories: ContainerState['categories'];
  readonly tableResult: ContainerState['tableResult'];
  readonly isTableItemsLoading: ContainerState['isTableItemsLoading'];
  readonly isNextTableItemsLoading: ContainerState['isNextTableItemsLoading'];
}

// tslint:disable-next-line:no-empty-interface
interface DispatchProps {
  readonly dispatch: Dispatch;
  updateLocation(path: string, id: string, param1: number): void;
}

type Props = StateProps & DispatchProps & OwnProps;

interface State {}

class Athlete extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    const urlParams = this.props.match.params as {
      id: string;
    };
    if (!urlParams.id) {
      this.props.dispatch(replace('/notfound'));
      return;
    }
    this.props.dispatch(actions.setId(urlParams.id));


    if (!this.props.athlete || urlParams.id !== this.props.athlete.id) {
      this.props.dispatch(actions.loadAthlete());
    }
    if (!this.props.tableResult || this.props.tableResult.items.length === 0) {
      this.props.dispatch(actions.loadTableItems());
      this.props.dispatch(actions.loadCategories());
    }
  }

  private loadMoreItems = () => {
    this.props.dispatch(actions.loadNextItems());
  };

  private onContestClick = (id: string, discipline: number) => {
    this.props.updateLocation('contest', id, discipline);
  };

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

  public render() {
    const categories = this.categories();
    const { isAthleteLoading, athlete } = this.props;
    return (
      <TabPanel>
        <Header>Athlete</Header>
        <AthleteInfo isLoading={isAthleteLoading} item={athlete} />
        <Header>Contests</Header>
        <CategoriesFilters categories={categories} filters={[]} />
        <MainTableSection>
          <MainTable
            tableItems={this.props.tableResult}
            onItemClick={this.onContestClick}
            isItemsLoading={this.props.isTableItemsLoading}
            showMoreClicked={this.loadMoreItems}
            isNextItemsLoading={this.props.isNextTableItemsLoading}
          />
        </MainTableSection>
      </TabPanel>
    );
  }
}

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  id: selectors.selectId(),
  athlete: selectors.selectAthlete(),
  isAthleteLoading: selectors.isAthleteLoading(),
  categories: selectors.selectCategories(),
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
    updateLocation: (path: string, id: string, param1: number) => {
      if (id) {
        dispatch(push(`/${path}/${id}/${param1}`));
      }
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer<OwnProps>({
  key: 'athlete',
  reducer: reducer,
});
const withSaga = injectSaga<OwnProps>({ key: 'athlete', saga: saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Athlete);
