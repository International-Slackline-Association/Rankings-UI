/**
 *
 * AdminResults
 *
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import * as selectors from './selectors';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';

import { RootState, ContainerState } from './types';
import { ISelectOption } from 'types/application';
import TabPanel from 'components/TabPanel';
import styled from 'styles/styled-components';
import AutoCompleteFilter from 'components/CategoriesFilters/AutoCompleteFilter';
import Snackbar from 'components/Snackbar';
import Wrapper from './Wrapper';
import Header from 'containers/AdminAthlete/Header';
import LoadableButton from 'components/LoadableButton';
import media from 'styles/media';
import {
  APIAdminSubmitContestResultsRequest,
  apiSubmitContestResults,
} from './api';
import { AxiosError } from 'axios';

interface OwnProps {}

interface StateProps {
  contestFilter: ContainerState['contestFilter'];
  athleteFilters: ContainerState['athleteFilters'];
}

interface DispatchProps {
  dispatch: Dispatch;
}

type Props = StateProps & DispatchProps & OwnProps;

interface State {
  snackbar: {
    open: boolean;
    message: string;
    type?: 'error' | 'success';
  };
  isSubmitting: boolean;
}

export class AdminResults extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      snackbar: {
        type: 'success',
        message: '',
        open: false,
      },
      isSubmitting: false,
    };
  }

  private findAthleteInForm = (id: string) => {
    return this.props.athleteFilters.find(
      a => (a.selectedValue ? a.selectedValue.value === id : false),
    );
  };

  private loadContestSuggestions = (value: string) => {
    this.props.dispatch(actions.loadContestSuggestions(value));
  };

  private selectContestSuggestion = (suggestion: ISelectOption) => {
    this.props.dispatch(actions.setContestFilterSelectedValue(suggestion));
  };

  private numberInputOnChanged = (index: number) => {
    return (evt: any) => {
      this.props.dispatch(
        actions.changeAthleteFilterOrder(parseInt(evt.target.value, 10), index),
      );
    };
  };
  private loadAthleteSuggestions = (index: number) => {
    return (value: string) => {
      this.props.dispatch(actions.loadAthleteSuggestions(value, index));
    };
  };

  private selectAthleteSuggestion = (index: number) => {
    return (suggestion: ISelectOption) => {
      if (this.findAthleteInForm(suggestion.value)) {
        this.openSnackbar(
          true,
          'Cannot have duplicate athletes in form',
          'error',
        );
        this.props.dispatch(
          actions.setAthleteFilterSelectedValue(
            { value: '', label: '' },
            index,
          ),
        );
      } else {
        this.props.dispatch(
          actions.setAthleteFilterSelectedValue(suggestion, index),
        );
      }
    };
  };

  private addAthleteFilter = () => {
    this.props.dispatch(actions.addAthleteFilter());
  };

  private openSnackbar = (
    state: boolean,
    message: string = '',
    type: State['snackbar']['type'] = 'success',
  ) => {
    if (state) {
      this.openSnackbar(false);
    }

    this.setState({ snackbar: { open: state, message: message, type: type } });
  };

  private onSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.openSnackbar(false);
  };

  private validate = () => {
    const { athleteFilters, contestFilter } = this.props;
    if (!contestFilter.selectedValue) {
      this.openSnackbar(true, 'Invalid Contest', 'error');
      return false;
    }

    for (const athleteFilter of athleteFilters) {
      if (!athleteFilter.selectedValue) {
        this.openSnackbar(true, 'Select Athlete for all fields', 'error');
        return false;
      }
    }
    return true;
  };

  private submit = async (): Promise<void> => {
    if (!this.validate()) {
      return;
    }
    const { athleteFilters, contestFilter } = this.props;

    const [id, discipline] = contestFilter.selectedValue!.value.split(':');
    const request: APIAdminSubmitContestResultsRequest = {
      results: {
        contestId: id,
        discipline: parseInt(discipline, 10),
        places: athleteFilters.map(athleteFilter => {
          return {
            athleteId: athleteFilter.selectedValue!.value,
            place: athleteFilter.orderNumber,
          };
        }),
      },
    };
    this.setState({ isSubmitting: true });
    return apiSubmitContestResults(request)
      .then(async response => {
        this.setState({ isSubmitting: false });
        this.openSnackbar(true, 'Saved Successfully', 'success');
        this.props.dispatch(actions.clearForm());
      })
      .catch((err: AxiosError) => {
        this.setState({ isSubmitting: false });
        const message = err.response
          ? err.response.data.message || err.message
          : err.message;
        this.openSnackbar(true, message, 'error');
      });
  };

  public render() {
    const { athleteFilters, contestFilter } = this.props;
    return (
      <TabPanel>
        <Helmet>
          <title>AdminResults</title>
          <meta name="description" content="Manage Results" />
        </Helmet>
        <Wrapper>
          <Header>Contest</Header>
          <StyledAutoCompleteFilter
            title={'Name'}
            placeholder={'Search contest'}
            loadSuggestions={this.loadContestSuggestions}
            suggestionSelected={this.selectContestSuggestion}
            suggestions={contestFilter.suggestions}
            selectedOption={contestFilter.selectedValue}
          />
          <Header>Results</Header>
          <ResultsWrapper>
            {athleteFilters.map((athleteFilter, index) => (
              <AthleteFilterWrapper key={index}>
                <NumberInput
                  defaultValue={`${athleteFilter.orderNumber}`}
                  onChange={this.numberInputOnChanged(index)}
                />
                <StyledAutoCompleteFilter
                  // key={athleteFilter.selectedValue}
                  title={'Name'}
                  placeholder={'Searh Athlete'}
                  loadSuggestions={this.loadAthleteSuggestions(index)}
                  suggestionSelected={this.selectAthleteSuggestion(index)}
                  suggestions={athleteFilter.suggestions}
                  selectedOption={athleteFilter.selectedValue}
                />
              </AthleteFilterWrapper>
            ))}
            <AthleteFilterWrapper>
              <span>Add: </span>
              <StyledAddButton onClick={this.addAthleteFilter} loading={false}>
                +
              </StyledAddButton>
            </AthleteFilterWrapper>
            <StyledLoadableButton
              onClick={this.submit}
              loading={this.state.isSubmitting}
            >
              Submit
            </StyledLoadableButton>
          </ResultsWrapper>
        </Wrapper>
        <Snackbar
          open={this.state.snackbar.open}
          handleClose={this.onSnackbarClose}
          message={this.state.snackbar.message}
          type={this.state.snackbar.type}
        />
      </TabPanel>
    );
  }
}

const NumberInput = styled.input.attrs({ type: 'number', min: 1 })`
  width: 30px;
`;

const AthleteFilterWrapper = styled.div`
  display: flex;
  align-items: center;

  & span {
    color: ${props => props.theme.textPrimary};
    margin-right: 16px;
  }
`;

const StyledAutoCompleteFilter = styled(AutoCompleteFilter)`
  width: 250px;
  margin-bottom: 32px;
  .react-autosuggest__input {
    width: 100%;
  }
`;

const StyledAddButton = styled(LoadableButton)`
  margin-top: 0px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 2em;
  padding: 0px;
`;

const StyledLoadableButton = styled(LoadableButton)`
  margin-top: 16px;
  width: 128px;
`;

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 100%;
  ${media.tablet`
    flex-wrap: wrap;
    max-height: 1000px;
  `};
`;

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  contestFilter: selectors.selectContestFilter(),
  athleteFilters: selectors.selectAthleteFilters(),
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
  key: 'adminResults',
  reducer: reducer,
});
// <OwnProps> restricts access to the HOC's other props. This component must not do anything with saga hoc
const withSaga = injectSaga<OwnProps>({ key: 'adminResults', saga: saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AdminResults);
