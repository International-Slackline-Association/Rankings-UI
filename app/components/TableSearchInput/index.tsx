import * as React from 'react';

import Autosuggest = require('react-autosuggest');
import { AutosuggestWrapper } from 'components/AutosuggestWrapper';

// Imagine you have a list of languages that you'd like to autosuggest.
// const languages = [
//   {
//     name: 'C',
//     year: 1972,
//   },
//   {
//     name: 'C1',
//     year: 1972,
//   },
//   {
//     name: 'C2',
//     year: 1972,
//   },
//   {
//     name: 'C3',
//     year: 1972,
//   },
//   {
//     name: 'Elm',
//     year: 2012,
//   },
// ];

interface ISuggestion {
  name: string;
}

interface State {
  value: string;
  // suggestions: ISuggestion[];
}

interface Props {
  placeholder: string;
  suggestions?: ISuggestion[];
  loadSuggestions(searchValue: string);
  suggestionSelected(value: ISuggestion);
  clearSuggestions();
}

const renderSuggestion = (suggestion: ISuggestion) => <span>{suggestion.name}</span>;

class TableSearchInput extends React.PureComponent<Props, State> {
  public static defaultProps = {
    placeholder: '',
    suggestions: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      // suggestions: this.props.suggestions ? this.props.suggestions : [],
    };
  }
  private getSuggestionValue = (suggestion: ISuggestion) => {
    this.props.suggestionSelected(suggestion);
    return suggestion.name;
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
    // this.setState({
    //   suggestions: this.getSuggestions(value),
    // });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  private onSuggestionsClearRequested = () => {
    this.props.clearSuggestions();
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
      <AutosuggestWrapper>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </AutosuggestWrapper>
    );
  }
}

export default TableSearchInput;
