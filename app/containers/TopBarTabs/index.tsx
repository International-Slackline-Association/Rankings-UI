import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { TabList, TabPanel, Tab } from 'react-tabs';
import Tabs from './Tabs';
import Wrapper from './Wrapper';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { compose, Dispatch } from 'redux';
import reducer from './reducer';
import saga from './saga';
import { selectTabItems, selectSelectedId } from './selectors';
import { changeTopBarIndex } from './actions';
import Link from './Link';
import { ContainerState, RootState } from './types';
import { ApplicationRootState } from 'types';
import TopBarButton from 'components/TopBarButton';
import { TopBarTabType } from 'types/enums';

// tslint:disable-next-line:no-empty-interface
interface OwnProps {}

interface StateProps {
  tabItems: ContainerState['items'];
  selectedId: ContainerState['selectedId'];
}

interface DispatchProps {
  onSelectedIndexChanged(id: string): any;
}

type Props = StateProps & DispatchProps & OwnProps;

class TopBarTabs extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  private onButtonSelect = (id: string) => {
    this.props.onSelectedIndexChanged(id);
  };

  public render() {
    const { tabItems, selectedId } = this.props;
    return (
      <Wrapper>
        {tabItems.map((item, index) => {
          return (
            <TopBarButton
              key={item.id}
              id={item.id}
              name={item.name}
              type={item.type}
              onSelect={this.onButtonSelect}
              isSelected={item.id === selectedId}
              isFirstDynamicTab={
                item.type === TopBarTabType.Dynamic && tabItems[index - 1].type === TopBarTabType.Static
              }
            />
          );
        })}
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  tabItems: selectTabItems(),
  selectedId: selectSelectedId(),
});

function mapDispatchToProps(dispatch: Dispatch, ownProps: OwnProps): DispatchProps {
  return {
    onSelectedIndexChanged: (id: string) => {
      dispatch(changeTopBarIndex(id));
    },
  };
}

const withReducer = injectReducer<OwnProps>({
  key: 'topBarTabs',
  reducer: reducer,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga<OwnProps>({ key: 'topBarTabs', saga: saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TopBarTabs);
