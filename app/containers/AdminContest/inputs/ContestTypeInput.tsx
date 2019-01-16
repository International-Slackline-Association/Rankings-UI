import * as React from 'react';
import styled from 'styles/styled-components';
import { FieldProps } from 'formik';
import { ContestFormValues } from '../types';
import { isNil } from 'lodash';
import Wrapper from './Wrapper';
import ErrorLabel from './ErrorLabel';
import { ISelectOption } from 'types/application';

interface Props {
  contestTypes: ISelectOption[];
}

class ContestTypeInput extends React.PureComponent<
  Props & FieldProps<ContestFormValues>
> {
  public render() {
    const field = this.props.field;
    const { touched, errors } = this.props.form;
    const isError = touched[field.name] && !isNil(errors[field.name]);

    return (
      <Wrapper>
        <div>
          <Span>Type: </Span>
          <select {...field} value={field.value} placeholder="Contest Type">
            <option value={-1}>None</option>
            {this.props.contestTypes.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
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

export default ContestTypeInput;
