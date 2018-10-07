import * as React from 'react';
import Autosuggest = require('react-autosuggest');
import { AutosuggestWrapper } from 'components/AutosuggestWrapper';

import styled, { colors } from 'styles/styled-components';

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import media from 'styles/media';

interface FilterItem {
  id: string;
  name: string;
  isSelected: boolean;
}

interface ISuggestion {
  name: string;
}

interface State {
  dropdownOpen: boolean;
  value: string;
  suggestions: ISuggestion[];
}

interface Props {
  name: string;
  items: FilterItem[];
  onItemSelected(id: string);
}

const renderSuggestion = (suggestion: ISuggestion) => <span>{suggestion.name}</span>;

class TableDropdownSearchableFilter extends React.PureComponent<Props, State> {
  public static defaultProps = {
    dropdownOpen: false,
    suggestions: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      value: '',
      suggestions: [],
    };
  }

  private getSuggestionValue = (suggestion: ISuggestion) => {
    return suggestion.name;
  };

  private getSuggestions = (value: string) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : this.props.items.filter(item => item.name.toLowerCase().slice(0, inputLength) === inputValue);
  };

  private onChange = (event, params?: { newValue: string }) => {
    if (params) {
      this.setState({
        value: params.newValue,
      });
    }
  };

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

  // private onDropdownSelected = id => {
  //   return () => this.props.onItemSelected(id);
  // };

  private getSelectedName = () => {
    const selectedItem = this.props.items.find(i => i.isSelected);
    return selectedItem && selectedItem.name;
  };

  public render() {
    const { name } = this.props;

    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps: Autosuggest.InputProps<any> = {
      placeholder: 'Type to filter',
      value: value,
      onChange: this.onChange,
    };

    return (
      <Wrapper>
        <CustomDropdown>
          <CustomDropdownToggle tag="button" data-toggle="dropdown" aria-expanded={this.state.dropdownOpen}>
            <DropdownContent filterName={name} selectedFilter={this.getSelectedName()} />
          </CustomDropdownToggle>
          <CustomDropdownMenu>
            <CustomDropdownItem>
              <AutosuggestWrapper isLoading={false}>
                <Autosuggest
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  getSuggestionValue={this.getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputProps}
                  alwaysRenderSuggestions={true}
                />
              </AutosuggestWrapper>
            </CustomDropdownItem>
          </CustomDropdownMenu>
        </CustomDropdown>
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 1em;
`;

const CustomDropdown = styled(UncontrolledDropdown)`
  display: flex;
  align-content: center;
  align-items: center;
`;

const CustomDropdownToggle = styled(DropdownToggle)`
  color: ${props => props.theme.textInverted};
  height: 28px;
  padding: 0px 10px;
  /* width: 70px; */
  border: none;
  background-color: ${props => props.theme.componentBackgroundSecondary};
  border-radius: 4px;
  outline: none;

  ${media.desktop`
    /* width: 70px; */
  `};

  ${media.desktopLarge`
    padding: 0px;
    width: 100px;
  `};

  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: none;
    opacity: 0.8;
  }
`;

interface DropdownContentProps {
  filterName: string;
  selectedFilter: string | undefined;
}
const DropdownContent: React.SFC<DropdownContentProps> = props => {
  return (
    <DropDownContentWrapper>
      <DropdownContentHeader>{props.filterName}</DropdownContentHeader>
      <DropdownContentSubHeader>{props.selectedFilter && `${props.selectedFilter}`}</DropdownContentSubHeader>
    </DropDownContentWrapper>
  );
};

const DropdownContentHeader = styled.div`
  font-size: 0.9em;
  font-weight: bold;
  display: flex;
  align-items: center;
  &::after {
    margin-left: 3px;
    display: block;
    content: '';
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 3px solid #fff;
  }
`;

const DropdownContentSubHeader = styled.span`
  font-size: 0.6em;
  align-content: center;
  padding-right: 9px;
`;

const DropDownContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CustomDropdownMenu = styled(DropdownMenu)`
  &.dropdown-menu {
    background-color: ${props => props.theme.componentBackground};
    border: 1px solid ${props => props.theme.border};
    width: 12rem;
  }
  /* font-size: 12px; */
`;

interface DropdownItemProps {
  isSelected: boolean;
}
const CustomDropdownItem = styled<DropdownItemProps, any>(DropdownItem)`
  /* font-size: 12px; */
  &.dropdown-item {
    color: ${props => (props.isSelected ? colors.isaRed : props.theme.textPrimary)};
    text-align: center;
    background-color: ${props => props.theme.componentBackground};
    border: none;
    width: 100%;
    padding: 10px 0px;
    :hover {
      background-color: ${props => props.theme.componentBackgroundSecondary};
      color: ${props => props.theme.textPrimary};
    }
    :active {
      background-color: ${props => props.theme.componentBackgroundSecondary};
      color: ${props => props.theme.textPrimary};
      outline: none;
    }
    :focus {
      outline: none;
    }
  }
`;
export default TableDropdownSearchableFilter;
