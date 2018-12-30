import * as React from 'react';
import { FieldProps } from 'formik';
import TextField from '@material-ui/core/TextField/TextField';
import styled from 'styles/styled-components';
import { AthleteFormValues } from '../types';
import { isNil } from 'lodash';
import AutoCompleteFilter from './AutoCompleteFilter';
import { ISelectOption } from 'components/CategoriesFilters/types';
import Wrapper from './Wrapper';
import ErrorLabel from './ErrorLabel';

export interface ForminInputComponentProps {
  readonly suggestions: ISelectOption[];
  loadSuggestions(value: string): void;
}

type Props = ForminInputComponentProps & FieldProps<AthleteFormValues>;

interface State {
  readonly selectedValue: string;
}

class AutoCompleteTextInput extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedValue: '',
    };
  }

  private updateFormikValue: (value: string) => void = () => {
    /* */
  };

  private setFieldValue = (
    name: string,
    setFieldValue: (field: string, value: any) => void,
  ) => {
    return (value: string) => {
      setFieldValue(name, value);
    };
  };

  private loadSuggestions = (value: string) => {
    console.log('Load: ', value);
    this.props.loadSuggestions(value);
  };

  private selectSuggestion = (suggestion: ISelectOption) => {
    console.log('Select: ', suggestion);
    this.setState({ selectedValue: suggestion.value });
    this.updateFormikValue(suggestion.value);
  };

  public render() {
    const field = this.props.field;
    const selectedValue = field.value;

    this.updateFormikValue = this.setFieldValue(
      field.name,
      this.props.form.setFieldValue,
    );
    const { touched, errors } = this.props.form;
    const isError = touched[field.name] && !isNil(errors[field.name]);
    return (
      <Wrapper>
        <AutoCompleteFilter
          title={field.name}
          placeholder={field.name}
          loadSuggestions={this.loadSuggestions}
          suggestionSelected={this.selectSuggestion}
          suggestions={this.props.suggestions}
          selectedValue={selectedValue}
          inputName={field.name}
          {...field}
        />
        {isError && <ErrorLabel>{errors[field.name]}</ErrorLabel>}
      </Wrapper>
    );
  }
}

export default AutoCompleteTextInput;
