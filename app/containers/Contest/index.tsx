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
import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';

import { RootState, ContainerState } from './types';
import TabPanel from 'components/TabPanel';
import MainTableSection, { SelectedFilters } from 'components/MainTableSection';
import SelectedFilterButton from 'components/SelectedFilterButton';
import MainTable from './MainTable';
import TableFilters from 'components/TableFilters';
import TableDropdownFilter from 'components/TableDropdownFilter';
import TableSearchInput from 'components/TableSearchInput';
import * as actions from './actions';
import {
  SideInfoBoxContest,
  SideInfoBoxContests,
  ModalInfoBoxContest,
  SideInfoBoxAthlete,
  ModalInfoBoxAthlete,
} from 'components/InfoBox';
import Modal, { MobileOnlyModal } from 'components/Modal';
import {
  SelectedFilter,
  SearchSuggestion,
} from 'containers/GenericTabContent/types';
import { RouteProps } from 'react-router';
import { replace } from 'connected-react-router';
import { TopBarTabContentType } from 'types/enums';

// tslint:disable-next-line:no-empty-interface
interface OwnProps extends RouteProps {}

// tslint:disable-next-line:no-empty-interface
interface StateProps {
  id: ContainerState['id'];
  contest: ContainerState['contest'];
  tableResult: ContainerState['tableResult'];
  isTableItemsLoading: ContainerState['isTableItemsLoading'];
  isNextTableItemsLoading: ContainerState['isNextTableItemsLoading'];
}

// tslint:disable-next-line:no-empty-interface
interface DispatchProps {
  dispatch: Dispatch;
  updateLocation(path: string, id: string);
}

type Props = StateProps & DispatchProps & OwnProps;

interface State {}

class Contest extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);
    if (!this.props.contest) {
      this.props.dispatch(actions.loadContest());
    }
    if (!this.props.tableResult || this.props.tableResult.items.length === 0) {
      this.props.dispatch(actions.loadTableItems());
    }
  }

  private loadMoreItems = () => {
    this.props.dispatch(actions.loadNextItems());
  };

  public render() {
    return (
      <TabPanel>
        <MainTableSection>
          <MainTable
            tableItems={this.props.tableResult}
            // onRowSelected={this.onTableRowSelected}
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
  contest: selectors.selectContest(),
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
  key: 'contest',
  reducer: reducer,
});
const withSaga = injectSaga<OwnProps>({ key: 'contest', saga: saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Contest);
