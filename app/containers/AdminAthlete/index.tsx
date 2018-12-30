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

import { RootState, ContainerState, AthleteFormValues } from './types';
import TabPanel from 'components/TabPanel';
import FormikForm from './Form';
import AutoCompleteFilter from 'components/CategoriesFilters/AutoCompleteFilter';
import { ISelectOption } from 'components/CategoriesFilters/types';
import Wrapper from './Wrapper';
import Header from './Header';
import styled from 'styles/styled-components';
import { apiSubmitAthlete } from './api';
import { APIAdminSubmitAthleteRequest } from 'api/admin/athlete/submit';
import Snackbar, { SnackbarProps } from 'components/Snackbar';
import { Storage } from 'aws-amplify';

interface OwnProps {}

interface StateProps {
  athleteFilter: ContainerState['athleteFilter'];
  athlete: ContainerState['athlete'];
  countryFilter: ContainerState['countryFilter'];
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
}

class AdminAthlete extends React.PureComponent<Props, State> {
  private profilePicture: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      snackbar: {
        type: 'success',
        message: '',
        open: false,
      },
    };
  }

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

  private loadCountrySuggestions = (value: string) => {
    this.props.dispatch(actions.loadCountrySuggestions(value));
  };

  private submit = async (values: AthleteFormValues): Promise<void> => {
    const request: APIAdminSubmitAthleteRequest = {
      athlete: values,
    };
    return apiSubmitAthlete(request)
      .then(async response => {
        if (!response.success) {
          this.openSnackbar(true, response.errorMessage, 'error');
        } else {
          let text = 'Saved Successfully.';
          if (this.profilePicture) {
            text += ' Uploading picture...';
          }
          this.openSnackbar(true, text, 'success');

          if (this.profilePicture) {
            await this.uploadProfilePicture(this.profilePicture, response.id);
          }

          this.props.dispatch(actions.clearForm());
        }
      })
      .catch(err => {
        this.openSnackbar(true, err.message, 'error');
      });
  };

  private openSnackbar = (
    state: boolean,
    message: string = '',
    type: State['snackbar']['type'] = 'success',
  ) => {
    this.setState({ snackbar: { open: state, message: message, type: type } });
  };

  private onSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.openSnackbar(false);
  };

  private profilePictureSelected = (file: any) => {
    this.profilePicture = file;
  };

  private uploadProfilePicture = (file: any, name: string) => {
    const options = {
      contentType: 'image/png',
    };
    return Storage.put(`athlete/${name}.jpg`, file, options)
      .then((result: any) => {
        this.openSnackbar(false);
        this.openSnackbar(true, 'Picture Uploaded', 'success');
      })
      .catch(err => {
        this.openSnackbar(false);
        this.openSnackbar(true, err.message, 'error');
      });
  };

  public render() {
    const { countryFilter } = this.props;
    return (
      <TabPanel>
        <Helmet>
          <title>AdminAthlete</title>
          <meta name="description" content="Manage Athletes" />
        </Helmet>
        <Wrapper>
          <Header>Modify Athlete</Header>
          <StyledAutoCompleteFilter
            title={'Name'}
            placeholder={'Search athlete to modify'}
            // required={this.props.required}
            loadSuggestions={this.loadSuggestions}
            suggestionSelected={this.selectSuggestion}
            suggestions={this.props.athleteFilter.suggestions}
            selectedValue={this.props.athleteFilter.selectedValue}
          />
          <FormikForm
            key={this.props.athlete ? this.props.athlete.id : undefined}
            values={this.props.athlete}
            countrySuggestions={countryFilter.suggestions}
            loadCountrySuggestions={this.loadCountrySuggestions}
            pictureSelected={this.profilePictureSelected}
            submit={this.submit}
          />
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
  countryFilter: selectors.selectCountryFilter(),
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
