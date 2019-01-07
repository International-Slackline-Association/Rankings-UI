import * as React from 'react';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import ComponentBackground from 'components/ComponentBackground';
import Popper from '@material-ui/core/Popper';
import {
  AutosuggestChildWrapperDiv,
  AutosuggestsWrapperDiv,
} from 'components/AutosuggestWrapper';
import styled from 'styles/styled-components';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconClose from 'components/Icons/IconClose';
import { DefaultButton } from 'styles/mixins';
import { TinyLoading } from 'components/Loading';
import { IFilter } from './types';
import { UISelectOption } from 'types/application';

interface Props extends IFilter {
  className?: string;
}

interface State {
  value: string;
  isLoading?: boolean;
  suggestions: UISelectOption[];
}

function renderSuggestion(
  suggestion: UISelectOption,
  { query, isHighlighted },
) {
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

class AutoCompleteFilter extends React.PureComponent<Props, State> {
  private popperNode: any;
  constructor(props: Props) {
    super(props);
    const selectedLabel = (this.props.suggestions || []).find(
      s => s.value === this.props.selectedValue,
    );
    this.state = {
      value: (selectedLabel && selectedLabel.label) || '',
      suggestions: this.props.suggestions || [],
    };
  }

  public componentDidUpdate(prevProps: Props) {
    if (!prevProps.suggestions && this.props.suggestions) {
      this.setLoading(false);
      this.setSuggestions(this.props.suggestions);
    }
  }

  private renderInputComponent = inputProps => {
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
              {this.state.isLoading ? (
                <TinyLoading />
              ) : (
                this.state.value && (
                  <Button onClick={this.clearFilter}>
                    <IconClose />
                  </Button>
                )
              )}
            </InputAdornment>
          ),
        }}
        {...other}
      />
    );
  };
  private renderSuggestionsContainer = options => {
    return (
      <Popper anchorEl={this.popperNode} open={Boolean(options.children)}>
        <ComponentBackground
          {...options.containerProps}
          style={{
            width: this.popperNode ? this.popperNode.clientWidth : null,
          }}
        >
          <AutosuggestChildWrapperDiv>
            {options.children}
          </AutosuggestChildWrapperDiv>
        </ComponentBackground>
      </Popper>
    );
  };
  private clearFilter = () => {
    this.setSuggestions([]);
    this.setValue('');
    if (this.props.selectedValue) {
      this.props.suggestionSelected({ label: '', value: '' });
    }
  };

  private getSuggestionValue = (suggestion: UISelectOption) => {
    this.props.suggestionSelected(suggestion);
    return suggestion.label;
  };

  private loadSuggestions(value) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;

    if (inputLength < 3) {
      this.setSuggestions([]);
      return;
    }
    this.setLoading(true);
    this.props.loadSuggestions(value);
  }

  private setLoading(loading: boolean) {
    this.setState({
      isLoading: loading,
    });
  }
  private setSuggestions(suggestions?: UISelectOption[]) {
    this.setState({
      suggestions: suggestions || [],
    });
  }

  private setValue(value: string) {
    this.setState({
      value: value,
    });
  }

  private handleSuggestionsFetchRequested = ({ value }) => {
    this.loadSuggestions(value);
  };

  private handleSuggestionsClearRequested = () => {
    this.setSuggestions([]);
  };

  private handleChange = (event, { newValue }) => {
    this.setValue(newValue);
  };

  public render() {
    const autosuggestProps = {
      renderInputComponent: this.renderInputComponent,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue: this.getSuggestionValue,
      renderSuggestion: renderSuggestion,
      renderSuggestionsContainer: this.renderSuggestionsContainer,
    };

    return (
      <Wrapper className={this.props.className}>
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

const Button = styled(DefaultButton)`
  width: 12px;
  height: 12px;
  color: ${props => props.theme.textSecondary};
`;

const Wrapper = styled.div`
  /* margin: 0px 16px; */
  width: 156px;

  .react-autosuggest__input {
    width: 100%;
  }
`;

export default AutoCompleteFilter;
