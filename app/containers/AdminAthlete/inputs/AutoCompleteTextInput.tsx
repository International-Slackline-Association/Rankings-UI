import * as React from 'react';
import { FieldProps } from 'formik';
import { isNil } from 'lodash';
import AutoCompleteFilter from './AutoCompleteFilter';
import Wrapper from './Wrapper';
import ErrorLabel from './ErrorLabel';
import { ISelectOption } from 'types/application';

export interface ForminInputComponentProps {
  readonly suggestions?: ISelectOption[];
  loadSuggestions(value: string): void;
}

type Props = ForminInputComponentProps & FieldProps;

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
    this.props.loadSuggestions(value);
  };

  private selectSuggestion = (suggestion: ISelectOption) => {
    this.setState({ selectedValue: suggestion.value });
    this.updateFormikValue(suggestion.value);
  };

  public render() {
    const field = this.props.field;
    const selectedValue = field.value as string;

    this.updateFormikValue = this.setFieldValue(
      field.name,
      this.props.form.setFieldValue,
    );
    const { touched, errors } = this.props.form;
    const isError = touched[field.name] && !isNil(errors[field.name]);
    return (
      <Wrapper>
        <AutoCompleteFilter
          key={selectedValue}
          title={field.name}
          placeholder={field.name}
          loadSuggestions={this.loadSuggestions}
          suggestionSelected={this.selectSuggestion}
          suggestions={this.props.suggestions}
          selectedOption={{ value: selectedValue, label: selectedValue }}
          inputName={field.name}
          {...field}
        />
        {isError && <ErrorLabel>{errors[field.name]}</ErrorLabel>}
      </Wrapper>
    );
  }
}

export default AutoCompleteTextInput;
