import * as React from 'react';

import Autosuggest = require('react-autosuggest');
import { AutosuggestWrapper } from 'components/AutosuggestWrapper';

interface ISuggestion {
  name: string;
}

interface State {
  value: string;
  isLoading: boolean;
  // suggestions: ISuggestion[];
}

interface Props {
  placeholder: string;
  suggestions?: ISuggestion[] | null;
  loadSuggestions(searchValue: string);
  suggestionSelected(value: ISuggestion);
  clearSuggestions(value: string);
}

class TableSearchInput extends React.PureComponent<Props, State> {
  public static defaultProps = {
    placeholder: '',
    suggestions: [],
  };

  public componentWillReceiveProps(nextProps: Props, nextContext: any) {
    if (nextProps.suggestions) {
      this.setState({
        isLoading: false,
      });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isLoading: false,
      // suggestions: this.props.suggestions ? this.props.suggestions : [],
    };
  }
  private getSuggestionValue = (suggestion: ISuggestion) => {
    this.props.suggestionSelected(suggestion);
    return suggestion.name;
  };
  private renderSuggestion = (suggestion: ISuggestion) => {
    const name = suggestion.name.toLowerCase();
    const value = this.state.value.toLowerCase();
    const index = name.indexOf(value);
    if (index === 0) {
      const x = suggestion.name.substring(0, this.state.value.length);
      const y = suggestion.name.substring(this.state.value.length);
      return (
        <span>
          {x}
          <b>{y}</b>
        </span>
      );
    }
    return <span>{suggestion.name}</span>;
  };

  // Teach Autosuggest how to calculate suggestions for any given input value.
  // private getSuggestions = (value: string) => {
  //   const inputValue = value.trim().toLowerCase();
  //   const inputLength = inputValue.length;

  //   return inputLength === 0
  //     ? []
  //     : languages.filter(lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue);
  // };

  private onChange = (event, params?: { newValue: string }) => {
    if (params) {
      this.setState({
        value: params.newValue,
      });
    }
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  private onSuggestionsFetchRequested = ({ value }) => {
    this.props.loadSuggestions(value);

    this.setState({
      isLoading: true,
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  private onSuggestionsClearRequested = () => {
    this.props.clearSuggestions(this.state.value);
    // this.setState({
    //   suggestions: [],
    // });
  };

  public render() {
    const { value } = this.state;
    const suggestions = this.props.suggestions ? this.props.suggestions : [];

    // Autosuggest will pass through all these props to the input.
    const inputProps: Autosuggest.InputProps<any> = {
      placeholder: this.props.placeholder,
      value: value,
      onChange: this.onChange,
    };

    return (
      <AutosuggestWrapper isLoading={this.state.isLoading}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </AutosuggestWrapper>
    );
  }
}

export default TableSearchInput;
