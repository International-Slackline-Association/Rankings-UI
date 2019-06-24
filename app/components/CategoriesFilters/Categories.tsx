import * as React from 'react';
import Section from './CategoryFilterButton/Section';
import styled from 'styles/styled-components';
import { VerticalDivider } from 'components/Divider';
import CategorySelect from './CategorySelect';
import { ICategory } from './types';
import { SmallLoading } from 'components/Loading';

export interface CategoryProps {
  categories: ICategory[];
}

interface Props extends CategoryProps {}

class Categories extends React.PureComponent<Props> {
  public render() {
    const categories = this.props.categories;

    return (
      <Wrapper>
        {/* <Section type="category" /> */}
        {/* <VerticalDivider /> */}
        {/* {categories.length > 0 ? (
          categories.map(category => (
            <CategorySelect key={category.title} category={category} />
          ))
        ) : (
          <SmallLoading />
        )} */}
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
