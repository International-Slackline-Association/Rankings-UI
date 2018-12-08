import * as React from 'react';
import styled from 'styles/styled-components';
import ComponentBackground from 'components/ComponentBackground';
import Divider from 'components/Divider';
import Categories from './Categories';
import media from 'styles/media';
import Filters from './Filters';
import CategoryFilterButton from './CategoryFilterButton';
import { Collapse } from '@material-ui/core';
import CategoryFilterSection from './CategoryFilterSection';
import InfoPopover from './InfoPopover';
interface Props {}

interface State {
  isOpen: boolean;
}
class CategoriesFilters extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  private handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  public render() {
    return (
      <React.Fragment>
        <ButtonSectionWrapper>
          <CategoryFilterButton isOpen={this.state.isOpen} onClick={this.handleClick} />
          <InfoPopover/>
        </ButtonSectionWrapper>
        <CategoryFilterSection isOpen={this.state.isOpen} />
      </React.Fragment>
    );
  }
}

const ButtonSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export default CategoriesFilters;
