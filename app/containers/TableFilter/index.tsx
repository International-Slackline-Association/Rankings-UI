import * as React from 'react';

import styled from 'styles/styled-components';

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

interface State {
  dropdownOpen: boolean;
}

class TableFilter extends React.PureComponent<{}, State> {
  public static defaultProps = {
    dropdownOpen: false,
  };

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  private toggle() {
    this.setState(prevState => {
      return {
        dropdownOpen: !prevState.dropdownOpen,
      };
    });
  }
  public render() {
    return (
      <Wrapper>
        <CustomDropdown>
          <CustomDropdownToggle
            tag="button"
            // onClick={this.toggle}
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
          >
            <DropdownContent
              filterName="Discipline"
              selectedFilter=""
            />
          </CustomDropdownToggle>
          <CustomDropdownMenu>
            <CustomDropdownItem>Actioadsasdn</CustomDropdownItem>
            {/* <DropdownItem divider /> */}
            <CustomDropdownItem>Action</CustomDropdownItem>
            {/* <DropdownItem divider /> */}
            <CustomDropdownItem>Action</CustomDropdownItem>
          </CustomDropdownMenu>
        </CustomDropdown>
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CustomDropdown = styled(UncontrolledDropdown)`
  /* background-color: ${props => props.theme.componentBackground}; */
  /* padding: 2px 0px 2px 0px; */

  display: flex;
  align-content: center;
  align-items: center;
`;

const CustomDropdownToggle = styled(DropdownToggle).attrs({
  className: 'toggle',
})`
  color: ${props => props.theme.textPrimary};
`;

interface DropdownContentProps {
  filterName: string;
  selectedFilter: string;
}
const DropdownContent: React.SFC<DropdownContentProps> = props => {
  return (
    <DropDownContentWrapper>
      <DropdownContentHeader>{props.filterName}</DropdownContentHeader>
      <DropdownContentSubHeader>
        {props.selectedFilter && `(${props.selectedFilter})`}
      </DropdownContentSubHeader>
    </DropDownContentWrapper>
  );
};

const DropdownContentHeader = styled.div`
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
    border-top: 3px solid #000;
  }
`;

const DropdownContentSubHeader = styled.span`
  font-size: 0.66rem;
  align-content: center;
  padding-right: 9px;
`;

const DropDownContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    opacity: 0.7;
  }
`;

const CustomDropdownMenu = styled(DropdownMenu)`
  background-color: ${props => props.theme.componentBackground};
  color: ${props => props.theme.textPrimary};
  /* border: none; */
  width: 100%;
  /* font-size: 12px; */
`;

const CustomDropdownItem = styled(DropdownItem)`
  background-color: ${props => props.theme.componentBackground};
  color: ${props => props.theme.textPrimary};
  border: none;
  width: 100%;
  /* font-size: 12px; */
`;
export default TableFilter;
