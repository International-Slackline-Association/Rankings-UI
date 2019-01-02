import * as React from 'react';
import deburr from 'lodash/deburr';
import Autosuggest, {
  AutosuggestProps,
  RenderInputComponent,
} from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import ComponentBackground from 'components/ComponentBackground';
import Popper from '@material-ui/core/Popper';
import { AutosuggestChildWrapperDiv } from 'components/AutosuggestWrapper';
import styled from 'styles/styled-components';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconClose from 'components/Icons/IconClose';
import { DefaultButton } from 'styles/mixins';
import { TinyLoading } from 'components/Loading';
import { IFilter } from 'components/CategoriesFilters/types';
import { ISelectOption } from 'types/application';

interface Props extends IFilter {
  onChange(e: any): void;
  inputName: string;
}

interface State {
  value: string;
  isLoading?: boolean;
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
  constructor(props: Props) {
    super(props);
    this.state = {
      value: this.props.selectedValue || '',
      suggestions: this.props.suggestions || [],
    };
  }

  public componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.suggestions) {
      const suggestions = this.props.suggestions || [];
      if (prevProps.suggestions.length !== suggestions.length) {
        if (prevProps.suggestions.length === 0 && suggestions.length > 0) {
          this.setLoading(false);
        }
        this.setSuggestions(this.props.suggestions);
      }

      // const selectedValue = this.props.selectedValue || '';
      // if (!prevProps.selectedValue && selectedValue) {
      //   this.setValue(selectedValue);
      // }
    }
  }

  private onInputChanged = (onChangeHandler: any) => {
    return (evt: any) => {
      // this.props.onChange(evt);
      onChangeHandler(evt);
    };
  };

  private renderInputComponent: RenderInputComponent<
    ISelectOption
  > = inputProps => {
    // tslint:disable-next-line:no-empty
    const { classes, inputRef = () => {}, ref, ...other } = inputProps;
    return (
      <TextField
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
        {...other as any}
        name={this.props.inputName}
        onChange={this.onInputChanged(other.onChange)}
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

  private getSuggestionValue = (suggestion: ISelectOption) => {
    this.props.suggestionSelected(suggestion);
    return suggestion.label;
  };

  private loadSuggestions(value) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;

    if (inputLength === 0) {
      this.setSuggestions([]);
    }
    this.setLoading(true);
    this.props.loadSuggestions(value);
  }

  private setLoading(loading: boolean) {
    this.setState({
      isLoading: loading,
    });
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
    return (
      <Wrapper>
        <Autosuggest<ISelectOption>
          renderInputComponent={this.renderInputComponent}
          suggestions={this.state.suggestions}
          onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={renderSuggestion}
          renderSuggestionsContainer={this.renderSuggestionsContainer}
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
  width: 150px;

  .react-autosuggest__input {
    width: 100%;
  }
`;

export default AutoCompleteFilter;
