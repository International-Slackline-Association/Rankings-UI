import * as React from 'react';
import { Formik, FormikErrors, Field, Form } from 'formik';
import styled from 'styles/styled-components';
import { AthleteFormValues } from './types';
import LoadableButton from 'components/LoadableButton';
import FormikInputComponent from './FormikInputComponent';
import Header from './Header';

interface Props {
  values?: AthleteFormValues | null;
}

class FormikForm extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  private initialValues(): AthleteFormValues {
    let values = this.props.values;
    if (!values) {
      values = {
        name: '',
        surname: '',
      };
    }
    return values;
  }
  public render() {
    console.log(this.props.values);
    const initialValues = this.initialValues();
    return (
      <Wrapper>
        <Header>Athlete</Header>
        <Formik<AthleteFormValues>
          enableReinitialize={true}
          initialValues={initialValues}
          // tslint:disable-next-line:jsx-no-lambda
          validate={values => {
            const errors: FormikErrors<AthleteFormValues> = {};
            if (!values.name) {
              errors.name = 'Required';
            }
            if (!values.surname) {
              errors.surname = 'Required';
            }
            return errors;
          }}
          // tslint:disable-next-line:jsx-no-lambda
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <StyledForm>
              <Field name="name" component={FormikInputComponent} required />
              <Field name="surname" component={FormikInputComponent} required />
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

const StyledForm = styled(Form)``;
const StyledLoadableButton = styled(LoadableButton).attrs({
  type: 'submit',
})`
  margin-top: 16px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* padding: 32px; */
`;

export default FormikForm;
