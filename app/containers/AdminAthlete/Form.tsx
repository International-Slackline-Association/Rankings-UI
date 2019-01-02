import * as React from 'react';
import { Formik, FormikErrors, Field, Form } from 'formik';
import styled from 'styles/styled-components';
import { AthleteFormValues } from './types';
import LoadableButton from 'components/LoadableButton';
import TextInput from './inputs/TextInput';
import Header from './Header';
import * as Yup from 'yup';
import ImageUpload from './inputs/ImageUpload';
import AutoCompleteTextInput from './inputs/AutoCompleteTextInput';
import { ISelectOption } from 'components/CategoriesFilters/types';
import GenderInput from './inputs/GenderInput';
import DateInput from './inputs/DateInput';
import media from 'styles/media';

interface Props {
  readonly values?: AthleteFormValues | null;
  readonly countrySuggestions: ISelectOption[];
  loadCountrySuggestions(value: string): void;
  pictureSelected(file: any): void;
  submit(values: AthleteFormValues): Promise<void>;
}

interface State {}
class FormikForm extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  private initialValues(): AthleteFormValues {
    let values = this.props.values;
    if (!values) {
      values = {
        id: '',
        name: '',
        surname: '',
        profileUrl: '',
        country: '',
        gender: 1,
        birthdate: '',
        email: '',
        city: '',
      };
    }
    return values;
  }
  private profilePictureSelected = (file: any) => {
    this.props.pictureSelected(file);
  };

  private validationSchema = Yup.object<AthleteFormValues>().shape({
    id: Yup.string(),
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(25, 'Too Long!')
      .required('Required'),
    surname: Yup.string()
      .min(2, 'Too Short!')
      .max(25, 'Too Long!')
      .required('Required'),
    profileUrl: Yup.string().notRequired(),
    country: Yup.string()
      .min(1, 'Too Short!')
      .required('Required'),
    gender: Yup.number()
      .min(1)
      .max(2)
      .required('Required'),
    birthdate: Yup.string().required(),
    email: Yup.string().email('Invalid Email!'),
    city: Yup.string().min(2, 'Too Short!'),
  });

  public render() {
    const initialValues = this.initialValues();
    return (
      <Wrapper>
        <Header>Athlete</Header>
        <Formik<AthleteFormValues>
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={this.validationSchema}
          // tslint:disable-next-line:jsx-no-lambda
          onSubmit={(values, { setSubmitting }) => {
            this.props.submit(values).then(_ => setSubmitting(false));
          }}
        >
          {({ isSubmitting }) => (
            <StyledForm>
              <Field name="name" component={TextInput} required />
              <Field name="surname" component={TextInput} required />
              <Field name="birthdate" component={DateInput} />
              <Field name="gender" component={GenderInput} />
              <Field name="email" type="email" component={TextInput} required />
              <Field
                name="country"
                component={AutoCompleteTextInput}
                suggestions={this.props.countrySuggestions}
                loadSuggestions={this.props.loadCountrySuggestions}
              />
              <Field name="city" component={TextInput} />

              <ImageUpload
                fileSelected={this.profilePictureSelected}
                url={initialValues.profileUrl}
              />

              <StyledLoadableButton
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                Save
              </StyledLoadableButton>
            </StyledForm>
          )}
        </Formik>
      </Wrapper>
    );
  }
}

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: nowrap;

  ${media.tablet`
    flex-wrap: wrap;
    max-height: 400px;
  `};
`;

const StyledLoadableButton = styled(LoadableButton).attrs({
  type: 'submit',
})`
  margin-top: 16px;
  width: 128px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  /* padding: 32px; */
`;

export default FormikForm;
