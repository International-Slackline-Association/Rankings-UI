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
import GenderInput from './inputs/GenderInput';
import DateInput from './inputs/DateInput';
import media from 'styles/media';
import { ISelectOption } from 'types/application';

interface Props {
  readonly values?: AthleteFormValues | null;
  readonly countrySuggestions?: ISelectOption[];
  loadCountrySuggestions(value: string): void;
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
        email: 'name@test.com',
        city: '',
        infoUrl: '',
        profilePictureFile: null,
        profilePictureData: null,
      };
    }
    return values;
  }

  private validationSchema = Yup.object<AthleteFormValues>().shape({
    id: Yup.string(),
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    surname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    profileUrl: Yup.string().notRequired(),
    country: Yup.string()
      .min(1, 'Too Short!')
      .required('Required'),
    gender: Yup.number()
      .min(1)
      .max(3)
      .required('Required'),
    birthdate: Yup.string(),
    email: Yup.string().email('Invalid Email!'),
    city: Yup.string().min(2, 'Too Short!').notRequired(),
    infoUrl: Yup.string()
      .url('Invalid Url')
      .notRequired(),
    profilePictureFile: Yup.mixed().notRequired(),
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
            // console.log('values: ', values);
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
              <Field name="infoUrl" component={TextInput} label={'Info Url'} />
              <Field
                name="profilePictureFile"
                component={ImageUpload}
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
    max-height: 450px;
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
