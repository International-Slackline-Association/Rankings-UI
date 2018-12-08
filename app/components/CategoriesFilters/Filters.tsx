import * as React from 'react';
import Section from './CategoryFilterButton/Section';
import styled from 'styles/styled-components';
import Divider, { VerticalDivider } from 'components/Divider';
import CategorySelect from './CategorySelect';
import AutoCompleteFilter from './AutoCompleteFilter';
interface Props {}

class Filters extends React.PureComponent<Props> {
  public render() {
    return (
      <Wrapper>
        <Section type="filter" width="87.44px" />
        <VerticalDivider />
        <AutoCompleteFilter title={'Athlete'} placeholder={'Name of the Athlete'} />
        <AutoCompleteFilter title={'Country'} placeholder={'Country'} />
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
