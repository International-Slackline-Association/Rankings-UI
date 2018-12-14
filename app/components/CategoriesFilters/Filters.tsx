import * as React from 'react';
import Section from './CategoryFilterButton/Section';
import styled from 'styles/styled-components';
import { VerticalDivider } from 'components/Divider';
import AutoCompleteFilter from './AutoCompleteFilter';
import { IFilter } from './types';

export interface FilterProps {
  filters: IFilter[];
}

interface Props extends FilterProps {}

class Filters extends React.PureComponent<Props> {
  public render() {
    const filters = this.props.filters;
    return (
      <Wrapper>
        <Section type="filter" width="87.44px" />
        <VerticalDivider />
        {filters.map(filter => (
          <AutoCompleteFilter
            key={filter.title}
            title={filter.title}
            placeholder={filter.placeholder}
            loadSuggestions={filter.loadSuggestions}
            suggestionSelected={filter.suggestionSelected}
            suggestions={filter.suggestions}
          />
        ))}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-self: auto;
`;

export default Filters;
