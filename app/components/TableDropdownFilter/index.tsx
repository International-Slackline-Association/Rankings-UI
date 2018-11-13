import * as React from 'react';

import styled, { colors } from 'styles/styled-components';
import { rgba, lighten, darken } from 'polished';

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown } from 'reactstrap';
import media from 'styles/media';
import { isMetaProperty } from 'typescript';

interface FilterItem {
  id: string;
  name: string;
  isSelected: boolean;
}

interface Props {
  name: string;
  items: FilterItem[];
  onItemSelected(id: string);
}

interface State {
  dropdownOpen: boolean;
}

class TableDropdownFilter extends React.PureComponent<Props, State> {
  public static defaultProps = {
    dropdownOpen: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
    };
  }
  private toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  private onDropdownSelected = id => {
    return () => this.props.onItemSelected(id);
  };
  private getSelectedName = () => {
    const selectedItem = this.props.items.find(i => i.isSelected);
    return selectedItem && selectedItem.name;
  };

  public render() {
    const { name, items } = this.props;

    return (
      <Wrapper>
        <CustomDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <CustomDropdownToggle tag="button" data-toggle="dropdown" aria-expanded={this.state.dropdownOpen}>
            <DropdownContent filterName={name} selectedFilter={this.getSelectedName()} />
          </CustomDropdownToggle>
          <CustomDropdownMenu>
            {items.map(item => {
              return (
                <React.Fragment key={item.id}>
                  <CustomDropdownItem
                    disabled={item.isSelected}
                    key={item.id}
                    onClick={this.onDropdownSelected(item.id)}
                  >
                    {item.name}
                  </CustomDropdownItem>
                  {/* <DropdownItem divider /> */}
                </React.Fragment>
              );
            })}
          </CustomDropdownMenu>
        </CustomDropdown>
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3em;
  ${media.tablet`
    margin-right: 1em;
    margin-bottom: 0;
  `};
`;

const CustomDropdown = styled(ButtonDropdown)`
  display: flex;
  align-content: center;
  align-items: center;
`;

const CustomDropdownToggle = styled(DropdownToggle)`
  color: ${props => props.theme.textInvertedSecondary};
  height: 28px;
  padding: 0px 10px;
  width: 100px;
  /* border: none; */
  background-color: transparent;
  border-radius: 4px;
  border-color: ${props => rgba(props.theme.componentBackgroundSecondary, 0.5)};
  outline: none;
  cursor: pointer;

  ${media.tablet`
    width: auto;
  `};

  ${media.desktop`
    padding: 0px;
    width: 100px;
  `};

  &:hover {
    border-color: ${props => lighten(0.09, props.theme.componentBackgroundSecondary)};
  }
  &:focus {
    outline: none;
    border-color: ${props => lighten(0.09, props.theme.componentBackgroundSecondary)};
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
    border-top: 3px solid ${props => props.theme.componentBackgroundSecondary};
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
  overflow-y: scroll;
  max-height: 350px;
`;

const CustomDropdownItem = styled<any>(DropdownItem)`
  :disabled {
    opacity: 0.65;
    /* cursor: not-allowed; */
  }
  &.dropdown-item {
    cursor: pointer;
    color: ${props => props.theme.textPrimary};
    text-align: center;
    background-color: ${props => props.theme.componentBackground};
    border: none;
    width: 100%;
    padding: 10px 0px;
    :hover {
      background-color: ${props => props.theme.componentBackgroundSecondary};
      /* background-color: ${props => lighten(0.09, props.theme.componentBackgroundSecondary)}; */
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
export default TableDropdownFilter;
