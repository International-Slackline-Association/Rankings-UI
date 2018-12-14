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
import { ISelectOption, IFilter } from './types';

interface Props extends IFilter {
  isLoading?: boolean;
}

interface State {
  value: string;
  suggestions: ISelectOption[];
}

function renderSuggestion(suggestion: ISelectOption, { query, isHighlighted }) {
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
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: this.props.suggestions || [],
    };
  }

  public componentDidUpdate(prevProps: Props) {
    if (prevProps.suggestions) {
      if (
        prevProps.suggestions.length !== (this.props.suggestions || []).length
      ) {
        this.setSuggestions(this.props.suggestions);
      }
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
              {this.props.isLoading ? (
                <Empty>
                  <TinyLoading />
                </Empty>
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
          <AutosuggestWrapperDiv> {options.children}</AutosuggestWrapperDiv>
        </ComponentBackground>
      </Popper>
    );
  };
  private clearFilter = () => {
    this.setSuggestions([]);
    this.setValue('');
  }
  private getSuggestionValue = (suggestion: ISelectOption) => {
    this.props.suggestionSelected(suggestion.value);
    return suggestion.label;
  };

  private loadSuggestions(value) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;

    if (inputLength === 0) {
      this.setSuggestions([]);
    }

    this.props.loadSuggestions(value);
  }

  private setSuggestions(suggestions?: ISelectOption[]) {
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
