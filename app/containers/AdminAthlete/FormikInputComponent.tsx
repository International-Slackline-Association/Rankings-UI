import * as React from 'react';
import { FieldProps } from 'formik';
import TextField, {
  TextFieldProps,
} from '@material-ui/core/TextField/TextField';
import styled from 'styles/styled-components';
import { AthleteFormValues } from './types';
import { isNil } from 'lodash';

// const ForminInputComponent = (x: FieldProps<string>{
//   field, // { name, value, onChange, onBlur }
//   form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
//   // tslint:disable-next-line:trailing-comma
//   ...props
// }) => {
//   console.log(touched);
//   return (
//     <div>
//       <input type="text" {...field} {...props} />
//       {touched[field.name] &&
//         errors[field.name] && <div className="error">{errors[field.name]}</div>}
//     </div>
//   );
// };

export interface ForminInputComponentProps {
  required: boolean;
}

class FormikInputComponent extends React.PureComponent<
  ForminInputComponentProps & FieldProps<AthleteFormValues>
> {
  public render() {
    // console.log(this.props);
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
          {...field}
          {...this.props}
        />
        {isError && <ErrorLabel>{errors[field.name]}</ErrorLabel>}
      </Wrapper>
    );
  }
}

const ErrorLabel = styled.span`
  color: red;
`;

const textField = (props: any) => <TextField {...props} />;

const StyledTextField = styled(textField)`
  && {
    width: 150px;
    margin-bottom: 8px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default FormikInputComponent;
