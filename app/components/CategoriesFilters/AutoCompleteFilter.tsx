import * as React from 'react';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import ComponentBackground from 'components/ComponentBackground';
import Popper from '@material-ui/core/Popper';
import { AutosuggestWrapperDiv } from 'components/AutosuggestWrapper';
import styled from 'styles/styled-components';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconClose from 'components/Icons/IconClose';
import { DefaultButton } from 'styles/mixins';
import { TinyLoading } from 'components/Loading';

interface Props {
  placeholder: string;
  title: string;
  isLoading?: boolean;
}

interface ISuggestion {
  name: string;
}

interface State {
  value: string;
  suggestions: any[];
}

const suggestions = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' },
];

const renderInputComponent = (isLoading?: boolean) => inputProps => {
  // tslint:disable-next-line:no-empty
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;
  return (
    <TextField
      // fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        endAdornment: (
          // tslint:disable-next-line:jsx-wrap-multiline
          <InputAdornment position="end">
            {isLoading ? (
              <Empty>
                <TinyLoading />
              </Empty>
            ) : (
              <Button onClick={undefined}>
                <IconClose />
              </Button>
            )}
          </InputAdornment>
        ),
      }}
      {...other}
    />
  );
};

const renderSuggestionsContainer = popperNode => options => {
  return (
    <Popper anchorEl={popperNode} open={Boolean(options.children)}>
      <ComponentBackground
        {...options.containerProps}
        style={{
          width: popperNode ? popperNode.clientWidth : null,
        }}
      >
        <AutosuggestWrapperDiv> {options.children}</AutosuggestWrapperDiv>
      </ComponentBackground>
    </Popper>
  );
};

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <div>
      {parts.map((part, index) => {
        return part.highlight ? (
          <span key={String(index)} style={{ fontWeight: 900 }}>
            {part.text}
          </span>
        ) : (
          <strong key={String(index)} style={{ fontWeight: 'inherit' }}>
            {part.text}
          </strong>
        );
      })}
    </div>
  );
}

function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

class AutoCompleteFilter extends React.PureComponent<Props, State> {
  private popperNode: any;
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
    };
  }

  private handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };
  private handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  private handleChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  public render() {
    const autosuggestProps = {
      renderInputComponent: renderInputComponent(this.props.isLoading),
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue: getSuggestionValue,
      renderSuggestion: renderSuggestion,
      renderSuggestionsContainer: renderSuggestionsContainer(this.popperNode),
    };

    return (
      <Wrapper>
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            label: this.props.title,
            placeholder: this.props.placeholder,
            value: this.state.value,
            onChange: this.handleChange,
            inputRef: node => {
              this.popperNode = node;
            },
            InputLabelProps: {
              shrink: true,
            },
          }}
        />
      </Wrapper>
    );
  }
}

const Empty = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  right: 4px;
  align-items: center;
  align-self: center;
  font-weight: normal;
  /* color: ${props => props.theme.textSecondary}; */
  padding: 0 8px;
  text-align: center;
`;

const Button = styled(DefaultButton)`
  width: 12px;
  height: 12px;
  color: ${props => props.theme.textSecondary};
`;

const Wrapper = styled.div`
  margin: 0px 16px;
  width: 128px;
`;

export default AutoCompleteFilter;
