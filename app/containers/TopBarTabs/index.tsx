import * as React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { compose, Dispatch } from 'redux';
import reducer, { modifyTabBarItemsByURL, findPathAndId } from './reducer';
import saga from './saga';
import * as selectors from './selectors';
import * as actions from './actions';
import { ContainerState, RootState } from './types';
import TopBarButton from 'components/TopBarButton';
import { TopBarTabType, TopBarTabContentType } from 'types/enums';
import { replace, push } from 'connected-react-router';

import Background from './Background';
import StyledTabs from './Tabs';

// tslint:disable-next-line:no-empty-interface
interface OwnProps {}

interface StateProps {
  tabItems: ContainerState['items'];
  selectedId: ContainerState['selectedId'];
  locationPath: string;
}

interface DispatchProps {
  onSelectedIndexChanged(id: string): void;
  setTabBarTabs(items: ContainerState['items']): void;
  updateLocation(path: string, id: string, discipline?: string): void;
}

type Props = StateProps & DispatchProps & OwnProps;

class TopBarTabs extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.modifyItemsByUrl();
  }
  private modifyItemsByUrl() {
    if (this.props.locationPath) {
      const items = modifyTabBarItemsByURL(
        this.props.tabItems,
        this.props.locationPath,
      );
      this.props.setTabBarTabs(items);

      const { id } = findPathAndId(this.props.locationPath);
      if (id) {
        this.props.onSelectedIndexChanged(id);
      }
    }
  }
  private onButtonSelect = (
    id: string,
    contentType: TopBarTabContentType,
    discipline: string,
  ) => {
    const path = contentType;
    const idParam = id === '-2' || id === '-1' ? '' : id;
    this.props.updateLocation(path, idParam, discipline);
  };

  public render() {
    const { tabItems, selectedId } = this.props;
    const selectedValue = tabItems.findIndex(x => x.id === selectedId);
    return (
      <Background>
        {tabItems.map((item, index) => {
          return (
            <TopBarButton
              key={item.id}
              id={item.id}
              name={item.name}
              discipline={item.discipline}
              type={item.type}
              contentType={item.contentType}
              onSelect={this.onButtonSelect}
              isSelected={item.id === selectedId}
              isFirstDynamicTab={
                item.type === TopBarTabType.Dynamic &&
                tabItems[index - 1].type === TopBarTabType.Static
              }
            />
          );
        })}
      </Background>
    );
  }
}

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  tabItems: selectors.selectTabItems(),
  selectedId: selectors.selectSelectedId(),
  locationPath: selectors.selectLocationPath(),
});

function mapDispatchToProps(
  dispatch: Dispatch,
  ownProps: OwnProps,
): DispatchProps {
  return {
    onSelectedIndexChanged: (id: string) => {
      dispatch(actions.changeTopBarIndex(id));
    },
    setTabBarTabs: items => {
      dispatch(actions.setTopBarTabs(items));
    },
    updateLocation: (path: string, id?: string, discipline?: string) => {
      if (id) {
        if (discipline) {
          dispatch(push(`/${path}/${id}/${discipline}`));
        } else {
          dispatch(push(`/${path}/${id}`));
        }
      } else {
        dispatch(push(`/${path}`));
      }
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer<OwnProps>({
  key: 'topBarTabs',
  reducer: reducer,
});

const withSaga = injectSaga<OwnProps>({ key: 'topBarTabs', saga: saga });

// tslint:disable-next-line:max-line-length
// export default withReducer(withSaga(withConnect(TopBarTabs))); // identical to compose function, but requires no type definition
export default compose<TReducer, TSaga, TConnect, ReturnType>(
  withReducer,
  withSaga,
  withConnect,
)(TopBarTabs);

type ReturnType = React.ComponentType<OwnProps>;
type TReducer = ReturnType;
type TSaga = ReturnType;
type TConnect = typeof TopBarTabs;
