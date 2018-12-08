import * as React from 'react';
import Section from './CategoryFilterButton/Section';
import styled from 'styles/styled-components';
import Divider, { VerticalDivider } from 'components/Divider';
import CategorySelect from './CategorySelect';
interface Props {}

class Categories extends React.PureComponent<Props> {
  public render() {
    return (
      <Wrapper>
        <Section type="category"/>
        <VerticalDivider />
        <CategorySelect title="Discipline" />
        <CategorySelect title="Year" />
        <CategorySelect title="Gender" />
        <CategorySelect title="Age" />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-self: auto;
`;

export default Categories;
