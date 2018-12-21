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
import { RouteProps } from 'react-router';
import { replace, push } from 'connected-react-router';
import Header from './Header';
import ContestInfo from './Info';

interface OwnProps extends RouteProps {
  readonly id: string;
  readonly discipline: string;
}

interface StateProps {
  readonly contest: ContainerState['contest'];
  readonly isContestLoading: ContainerState['isContestLoading'];
  readonly tableResult: ContainerState['tableResult'];
  readonly isTableItemsLoading: ContainerState['isTableItemsLoading'];
  readonly isNextTableItemsLoading: ContainerState['isNextTableItemsLoading'];
}

// tslint:disable-next-line:no-empty-interface
interface DispatchProps {
  readonly dispatch: Dispatch;
  updateLocation(path: string, id: string): void;
}

type Props = StateProps & DispatchProps & OwnProps;

interface State {}

class Contest extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    const { id, discipline } = this.getIdDisciplineFromPath(
      props.location!.pathname,
    );

    if (!id || !discipline) {
      this.props.dispatch(replace('/notfound'));
    } else {
      this.props.dispatch(actions.setIdDiscipline(id, discipline));
    }

    if (!this.props.contest) {
      this.props.dispatch(actions.loadContest());
    }
    if (!this.props.tableResult || this.props.tableResult.items.length === 0) {
      this.props.dispatch(actions.loadTableItems());
    }
  }

  private getIdDisciplineFromPath = (path: string) => {
    const [{}, {}, id, discipline] = path.split('/');
    return { id: id, discipline: discipline };
  };

  private loadMoreItems = () => {
    this.props.dispatch(actions.loadNextItems());
  };

  private onAthleteClick = (id: string) => {
    this.props.updateLocation('athlete', id);
  };

  public render() {
    const { isContestLoading, contest } = this.props;
    return (
      <TabPanel>
        <Header>Contest</Header>
        <ContestInfo isLoading={isContestLoading} item={contest} />
        <Header>Results</Header>
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
    );
  }
}

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  contest: selectors.selectContest(),
  isContestLoading: selectors.isContestLoading(),
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
  key: 'contest',
  reducer: reducer,
});
const withSaga = injectSaga<OwnProps>({ key: 'contest', saga: saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Contest);
