import * as React from 'react';
import { FieldProps } from 'formik';
import TextField, {
  TextFieldProps,
} from '@material-ui/core/TextField/TextField';
import styled from 'styles/styled-components';
import { ContestFormValues } from '../types';
import { isNil } from 'lodash';
import Wrapper from './Wrapper';
import ErrorLabel from './ErrorLabel';


export interface ForminInputComponentProps {
  required: boolean;
}

class TextInput extends React.PureComponent<
  ForminInputComponentProps & FieldProps<ContestFormValues>
> {
  public render() {
    const field = this.props.field;
    const { touched, errors } = this.props.form;
    const isError = touched[field.name] && !isNil(errors[field.name]);
    return (
      <Wrapper>
        <StyledTextField
          label={field.name}
          placeholder={field.name}
          required={this.props.required}
          error={isError}
          autoComplete={'off'}
          {...field}
          {...this.props}
        />
        {isError && <ErrorLabel>{errors[field.name]}</ErrorLabel>}
      </Wrapper>
    );
  }
}

const textField = (props: any) => <TextField {...props} />;

const StyledTextField = styled(textField)`
  && {
    width: 150px;
    /* margin-bottom: 8px; */
  }
`;
export default TextInput;
