import * as React from 'react';
import styled from 'styles/styled-components';
import { FieldProps } from 'formik';
import { ContestFormValues } from '../types';
import { isNil } from 'lodash';
import Wrapper from './Wrapper';
import ErrorLabel from './ErrorLabel';
interface Props {}

class DateInput extends React.PureComponent<
  Props & FieldProps<ContestFormValues>
> {
  public render() {
    const field = this.props.field;
    const { touched, errors } = this.props.form;
    const isError = touched[field.name] && !isNil(errors[field.name]);
    return (
      <Wrapper>
        <div>
          <Span>Birthdate: </Span>
          <input type="date" {...field}/>
        </div>
        {isError && <ErrorLabel>{errors[field.name]}</ErrorLabel>}
      </Wrapper>
    );
  }
}

const Span = styled.span`
  color: ${props => props.theme.textPrimary};
`;

export default DateInput;
