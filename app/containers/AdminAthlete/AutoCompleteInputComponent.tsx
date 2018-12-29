import * as React from 'react';
import { FieldProps } from 'formik';
import TextField from '@material-ui/core/TextField/TextField';
import styled from 'styles/styled-components';
import { AthleteFormValues } from './types';
import { isNil } from 'lodash';
import AutoCompleteFilter from './AutoCompleteFilter';
import { ISelectOption } from 'components/CategoriesFilters/types';

export interface ForminInputComponentProps {
  required: boolean;
}

class AutoCompleteInputComponent extends React.PureComponent<
  ForminInputComponentProps & FieldProps<AthleteFormValues>
> {
  private loadSuggestions = (value: string) => {
    console.log('Load: ', value);
  };

  private selectSuggestion = (suggestion: ISelectOption) => {
    console.log('Select: ', suggestion);
  };

  public render() {
    console.log(this.props.field);
    const field = this.props.field;
    const { touched, errors } = this.props.form;
    const isError = touched[field.name] && !isNil(errors[field.name]);
    return (
      <Wrapper>
        <AutoCompleteFilter
          title={field.name}
          placeholder={field.name}
          // required={this.props.required}
          loadSuggestions={this.loadSuggestions}
          suggestionSelected={this.selectSuggestion}
          suggestions={[{ label: 'can', value: 'can' }]}
          selectedValue={''}
          inputName={field.name}
          {...field}
        />
        {isError && <ErrorLabel>{errors[field.name]}</ErrorLabel>}
      </Wrapper>
    );
  }
}

const ErrorLabel = styled.span`
  color: red;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default AutoCompleteInputComponent;
