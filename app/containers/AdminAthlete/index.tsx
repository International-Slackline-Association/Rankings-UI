import * as React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';

import { RootState, ContainerState } from './types';
import TabPanel from 'components/TabPanel';
import FormikForm from './Form';
import AutoCompleteFilter from 'components/CategoriesFilters/AutoCompleteFilter';
import { ISelectOption } from 'components/CategoriesFilters/types';
import Wrapper from './Wrapper';
import Header from './Header';
import styled from 'styles/styled-components';

interface OwnProps {}

interface StateProps {
  athleteFilter: ContainerState['athleteFilter'];
  athlete: ContainerState['athlete'];
}

interface DispatchProps {
  dispatch: Dispatch;
}

type Props = StateProps & DispatchProps & OwnProps;

class AdminAthlete extends React.PureComponent<Props> {
  private loadSuggestions = (value: string) => {
    this.props.dispatch(actions.loadAthleteSuggestions(value));
  };

  private selectSuggestion = (suggestion: ISelectOption) => {
    this.props.dispatch(
      actions.setAthleteFilterSelectedValue(suggestion.value),
    );
    if (suggestion.value.length > 0) {
      this.props.dispatch(actions.loadAthlete(suggestion.value));
    }
  };

  public render() {
    return (
      <TabPanel>
        <Helmet>
          <title>AdminAthlete</title>
          <meta name="description" content="Manage Athletes" />
        </Helmet>
        <Wrapper>
          <Header>Modify Athlete</Header>
          <StyledAutoCompleteFilter
            title={''}
            placeholder={'Search athlete to modify'}
            // required={this.props.required}
            loadSuggestions={this.loadSuggestions}
            suggestionSelected={this.selectSuggestion}
            suggestions={this.props.athleteFilter.suggestions}
            selectedValue={this.props.athleteFilter.selectedValue}
          />
          <FormikForm values={this.props.athlete} />
        </Wrapper>
      </TabPanel>
    );
  }
}

const StyledAutoCompleteFilter = styled(AutoCompleteFilter)`
  width: 250px;
  margin-bottom: 32px;
  .react-autosuggest__input {
    width: 100%;
  }
`;

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  athleteFilter: selectors.selectAthleteFilter(),
  athlete: selectors.selectAthlete(),
});

function mapDispatchToProps(
  dispatch: Dispatch,
  ownProps: OwnProps,
): DispatchProps {
  return {
    dispatch: dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// <OwnProps> restricts access to the HOC's other props. This component must not do anything with reducer hoc
const withReducer = injectReducer<OwnProps>({
  key: 'adminAthlete',
  reducer: reducer,
});
// <OwnProps> restricts access to the HOC's other props. This component must not do anything with saga hoc
const withSaga = injectSaga<OwnProps>({ key: 'adminAthlete', saga: saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AdminAthlete);
