import * as React from 'react';
import styled from 'styles/styled-components';
import categoriesSvg from './categories.svg?file';
import filterSvg from './filter.svg?file';

interface SectionProps {
  type: 'category' | 'filter';
  width?: string;
}
const Section = (props: SectionProps) => {
  return (
    <SectionDiv style={{ width: props.width ? props.width : 'auto' }}>
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
  margin: 8px 16px;
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

export default Section;
