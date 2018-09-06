import * as React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled, { colors } from 'styles/styled-components';
import searchIconSvg = require('./search.svg?file');

import Autosuggest = require('react-autosuggest');
import media from 'styles/media';

interface ISuggestion {
  name: string;
}
interface State {
  value: string;
  suggestions: ISuggestion[];
}

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'C',
    year: 1972,
  },
  {
    name: 'C1',
    year: 1972,
  },
  {
    name: 'C2',
    year: 1972,
  },
  {
    name: 'C3',
    year: 1972,
  },
  {
    name: 'Elm',
    year: 2012,
  },
];

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion: ISuggestion) => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion: ISuggestion) => (
  <span>{suggestion.name}</span>
);

class TableSearchInput extends React.PureComponent<{}, State> {
  constructor(props) {
    super(props);
    // this.onChange = this.onChange.bind(this);
    this.state = {
      value: '',
      suggestions: [],
    };
  }

  // Teach Autosuggest how to calculate suggestions for any given input value.
  private getSuggestions = (value: string) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : languages.filter(
          lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue,
        );
  };

  private onChange = (event, params: { newValue: string }) => {
    this.setState({
      value: params.newValue,
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  private onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  private onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  public render() {
    const { value, suggestions } = this.state;
    // Autosuggest will pass through all these props to the input.
    const inputProps: Autosuggest.InputProps<any> = {
      placeholder: 'Search',
      value: value,
      onChange: this.onChange,
    };
    return (
      <AutosuggestWrapper>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </AutosuggestWrapper>
    );
  }
}
const Wrapper = styled.div`
  background-color: ${colors.green};
  border: 1px solid ${props => props.theme.border};
  border-radius: 1em;
  margin-left: 8px;
  width: 40%;
  height: 24px;
  align-self: center;
  ${media.tablet`
    width: 140px;
  `};
`;

const classNames: any = {
  container: 'react-autosuggest__container',
  input: 'react-autosuggest__input',
  container_open: 'react-autosuggest__suggestions-container--open',
  suggestion_list: 'react-autosuggest__suggestions-list',
  input_focused: 'react-autosuggest__input--focused',
};

const AutosuggestWrapper = styled.div.attrs(classNames)`
  display: flex;
    .${classNames.container} {
      position: relative;
      /* background-color: ${colors.green}; */
      margin-left: 8px;
      margin-top: 8px;
      align-self: center;
    }
    .${classNames.input} {
      width: 66%;
      height: 24px;
      padding: 10px 10px;
      font-family: Helvetica, sans-serif;
      font-weight: 300;
      font-size: 1rem;
      border: 1px solid ${props => props.theme.border};
      box-shadow: 0px 2px 8px 0.5px ${props => props.theme.border};
      border-radius: 2px;
      background-image: url(${searchIconSvg});
      background-repeat: no-repeat;
      background-position: center right 10px;
      background-size: 1rem;

      ${media.tablet`
        width: 120px;
      `};
    }
    .${classNames.input_focused} {
      outline: none;
      background-image: none;

    }
    .${classNames.container_open} {
      display: block;
      position: absolute;
      /* top: 51px; */
      width: 120px;
      border: 1px solid ${props => props.theme.textSecondary};
      border-radius: 1em;
      background-color: #fff;
      font-family: Helvetica, sans-serif;
      font-weight: 300;
      font-size: 1rem;
      /* border-bottom-left-radius: 4px; */
      /* border-bottom-right-radius: 4px; */
      z-index: 2;
    }
    .${classNames.suggestion_list} {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

  }
  `;

const CustomAutoSuggest = styled(Autosuggest as any)`
  .react-autosuggest__container {
    position: relative;
    background-color: #f00;
  }

  .react-autosuggest__input {
    width: 50px;
    height: 30px;
    padding: 10px 20px;
    font-family: Helvetica, sans-serif;
    font-weight: 300;
    font-size: 16px;
    border: 1px solid #aaa;
    border-radius: 4px;
  }

  .react-autosuggest__input--focused {
    outline: none;
  }

  .react-autosuggest__input--open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .react-autosuggest__suggestions-container {
    display: none;
  }

  .react-autosuggest__suggestions-container--open {
    display: block;
    position: absolute;
    top: 51px;
    width: 280px;
    border: 1px solid #aaa;
    background-color: #fff;
    font-family: Helvetica, sans-serif;
    font-weight: 300;
    font-size: 16px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    z-index: 2;
  }

  .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .react-autosuggest__suggestion {
    cursor: pointer;
    padding: 10px 20px;
  }

  .react-autosuggest__suggestion--highlighted {
    background-color: #ddd;
  }

  .footer {
    margin: 9px 20px;
    font-size: 12px;
    color: #777;
  }
`;

export default TableSearchInput;
