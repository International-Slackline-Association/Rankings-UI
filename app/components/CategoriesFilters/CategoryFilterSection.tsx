import * as React from 'react';
import styled from 'styles/styled-components';
import ComponentBackground from 'components/ComponentBackground';
import Divider from 'components/Divider';
import Categories from './Categories';
import media from 'styles/media';
import Filters from './Filters';
import { Collapse } from '@material-ui/core';
import zIndex from 'styles/zIndex';
interface Props {
  isOpen: boolean;
}

class CategoryFilterSection extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <StyledCollapse in={this.props.isOpen}>
        <Wrapper>
          <Container>
            <Categories />
          </Container>
          <Divider margin={16} />
          <Container>
            <Filters />
          </Container>
        </Wrapper>
      </StyledCollapse>
    );
  }
}

const CustomCollapse = props => (
  <Collapse classes={{ wrapperInner: 'wrapperInner' }} {...props} />
);

const StyledCollapse = styled(CustomCollapse)`
  && {
    & .wrapperInner {
      width: 100%;

      ${media.desktop`
        width: auto;
      `};
    }
  }
`;
const Wrapper = styled(ComponentBackground)`
  margin-bottom: 16px;
  overflow: hidden;
  overflow-x: scroll;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: flex-start;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  margin: 16px 0px;
`;

export default CategoryFilterSection;
