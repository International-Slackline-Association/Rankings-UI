import * as React from 'react';
import styled from 'styles/styled-components';
import { FieldProps } from 'formik';
import { AthleteFormValues } from '../types';
import { isNil } from 'lodash';
import Wrapper from './Wrapper';
import ErrorLabel from './ErrorLabel';
interface Props {}

class GenderInput extends React.PureComponent<
  Props & FieldProps<AthleteFormValues>
> {
  public render() {
    const field = this.props.field;
    const { touched, errors } = this.props.form;
    const isError = touched[field.name] && !isNil(errors[field.name]);
    return (
      <Wrapper>
        <div>
          <Span>Gender: </Span>
          <select {...field} placeholder="Gender">
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
        </div>
        {isError && <ErrorLabel>{errors[field.name]}</ErrorLabel>}
      </Wrapper>
    );
  }
}

const Span = styled.span`
  color: ${props => props.theme.textPrimary};
`;

export default GenderInput;
