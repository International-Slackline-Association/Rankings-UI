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
import Wrapper from './Wrapper';
import Header from './Header';
import styled from 'styles/styled-components';
import { apiSubmitAthlete, apiSubmitAthletePicture } from './api';
import { APIAdminSubmitAthleteRequest } from 'api/admin/athlete/submit';
import Snackbar, { SnackbarProps } from 'components/Snackbar';
import { Storage } from 'aws-amplify';
import { ISelectOption } from 'types/application';
import { AxiosError } from 'axios';

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
    this.props.dispatch(actions.setAthleteFilterSelectedValue(suggestion));
    if (suggestion.value.length > 0) {
      this.props.dispatch(actions.loadAthlete(suggestion.value));
    } else {
      if (this.props.athlete) {
        const update = { ...this.props.athlete, id: '' };
        this.props.dispatch(actions.setAthlete(update));
      }
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
        let text = 'Saved Successfully.';
        if (this.profilePicture) {
          text += ' Uploading picture...';
        }
        this.openSnackbar(true, text, 'success');

        if (this.profilePicture) {
          await this.uploadProfilePicture(this.profilePicture, response.id);
        }

        this.props.dispatch(actions.clearForm());
      })
      .catch((err: AxiosError) => {
        const message = err.response
          ? err.response.data.message || err.message
          : err.message;
        this.openSnackbar(true, message, 'error');
      });
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

  private profilePictureSelected = (file: any) => {
    this.profilePicture = file;
  };

  private uploadProfilePicture = (file: any, athleteId: string) => {
    const options = {
      contentType: 'image/png',
    };
    return Storage.put(`athlete/${athleteId}.png`, file, options)
      .then(async (result: any) => {
        return Storage.get(result.key).then(async (presignedUrl: string) => {
          const imageUrl = presignedUrl.split('?')[0];
          if (imageUrl) {
            return apiSubmitAthletePicture({
              id: athleteId,
              url: imageUrl,
            }).then(rsp => {
              this.openSnackbar(true, 'Picture Uploaded', 'success');
            });
          }
          return Promise.resolve();
        });
      })
      .catch((err: AxiosError) => {
        const message = err.response
          ? err.response.data.message || err.message
          : err.message;
        this.openSnackbar(true, message, 'error');
      });
  };

  public render() {
    const { countryFilter, athlete } = this.props;
    const formikKey = athlete ? athlete.id || undefined : undefined;
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
            loadSuggestions={this.loadSuggestions}
            suggestionSelected={this.selectSuggestion}
            suggestions={this.props.athleteFilter.suggestions}
            selectedOption={this.props.athleteFilter.selectedValue}
          />
          <FormikForm
            key={formikKey}
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
