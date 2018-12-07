import * as React from 'react';
import ComponentBackground from 'components/ComponentBackground';
import styled from 'styles/styled-components';
import categoriesSvg from './categories.svg?file';
import filterSvg from './filter.svg?file';
import { lighten, darken } from 'polished';
import { clickEffect } from 'styles/mixins';

interface Props {}

class CategoryFilterButton extends React.PureComponent<Props> {
  public render() {
    return (
      <Wrapper>
        <Button>
          <Section type={'category'} />
          <Section type={'filter'} />
        </Button>
      </Wrapper>
    );
  }
}

const Wrapper = styled(ComponentBackground)`
  width: 200px;
  height: 45px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  ${clickEffect};
  padding: 0;
  display: flex;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.4;
  }

  &:focus {
    outline: none;
  }
`;

interface SectionProps {
  type: 'category' | 'filter';
}
const Section = (props: SectionProps) => {
  return (
    <SectionDiv>
      <img src={props.type === 'category' ? categoriesSvg : filterSvg} />
      <span>{props.type === 'category' ? 'Categories' : 'Filters'}</span>
    </SectionDiv>
  );
};

const SectionDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin: 8px;
  & img {
    width: 20px;
    height: 20px;
  }
  & span {
    margin-left: 8px;
    font-size: 1em;
    font-weight: inherit;
    color: ${props => props.theme.textPrimary};
  }
`;

export default CategoryFilterButton;
