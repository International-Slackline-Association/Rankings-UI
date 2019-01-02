import * as React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { compose, Dispatch } from 'redux';
import reducer, { findPathAndId } from './reducer';
import saga from './saga';
import * as actions from './actions';
import * as selectors from './selectors';
import { ContainerState, RootState } from './types';
import { push } from 'connected-react-router';

import Background from './Background';
import StyledTabs from './Tabs';
import AdminTopBarButton from 'components/AdminTopBarButton';

// tslint:disable-next-line:no-empty-interface
interface OwnProps {}

interface StateProps {
  selectedId: ContainerState['selectedId'];
  locationPath: string;
  isAuthenticated: boolean;
}

interface DispatchProps {
  dispatch: Dispatch;
  updateLocation(path: string, id: string): void;
}

type Props = StateProps & DispatchProps & OwnProps;

class TopBarTabs extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.modifyItems();
  }

  private modifyItems() {
    const { id } = findPathAndId(this.props.locationPath);
    if (id) {
      this.props.dispatch(actions.changeTopBarIndex(id));
    }
  }

  private onButtonSelect = (id: string) => {
    const path = 'admin';
    this.props.updateLocation(path, id);
  };

  private tabItems() {
    return ['athlete', 'contest', 'results'];
  }

  public render() {
    const { selectedId } = this.props;
    const tabItems = this.tabItems();
    const selectedValue = tabItems.findIndex(x => x === selectedId);
    return (
      <Background>
        {this.props.isAuthenticated && (
          <StyledTabs
            scrollButtons={'off'}
            scrollable={true}
            fullWidth={true}
            value={selectedValue}
          >
            {tabItems.map(item => {
              return (
                <AdminTopBarButton
                  key={item}
                  id={item}
                  name={item}
                  onSelect={this.onButtonSelect}
                  isSelected={item === selectedId}
                />
              );
            })}
          </StyledTabs>
        )}
      </Background>
    );
  }
}

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  selectedId: selectors.selectSelectedId(),
  locationPath: selectors.selectLocationPath(),
  isAuthenticated: selectors.selectIsAuthenticated(),
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
  key: 'adminTopBarTabs',
  reducer: reducer,
});

const withSaga = injectSaga<OwnProps>({ key: 'adminTopBarTabs', saga: saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TopBarTabs);
