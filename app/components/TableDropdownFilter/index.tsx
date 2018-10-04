import * as React from 'react';

import styled, { colors } from 'styles/styled-components';

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import media from 'styles/media';

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
        <CustomDropdown>
          <CustomDropdownToggle tag="button" data-toggle="dropdown" aria-expanded={this.state.dropdownOpen}>
            <DropdownContent filterName={name} selectedFilter={this.getSelectedName()} />
          </CustomDropdownToggle>
          <CustomDropdownMenu>
            {items.map(item => {
              return (
                <React.Fragment key={item.id}>
                  <CustomDropdownItem key={item.id} onClick={this.onDropdownSelected(item.id)}>
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
  overflow-y: scroll;
  max-height: 350px;
`;

interface DropdownItemProps {
  isSelected: boolean;
}
const CustomDropdownItem = styled<DropdownItemProps, any>(DropdownItem)`
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
export default TableDropdownFilter;
