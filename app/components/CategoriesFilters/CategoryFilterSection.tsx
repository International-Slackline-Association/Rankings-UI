import * as React from 'react';
import styled from 'styles/styled-components';
import ComponentBackground from 'components/ComponentBackground';
import Divider from 'components/Divider';
import Categories, { CategoryProps } from './Categories';
import media from 'styles/media';
import Filters, { FilterProps } from './Filters';
import { Collapse } from '@material-ui/core';

export type CategoryFilterProps = FilterProps & CategoryProps;

interface Props extends CategoryFilterProps {
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
            <Categories categories={this.props.categories} />
          </Container>
          {this.props.filters.length > 0 && (
            <React.Fragment>
              <Divider margin={16} />
              <Container>
                <Filters filters={this.props.filters} />
              </Container>
            </React.Fragment>
          )}
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
  overflow-y: hidden;
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
