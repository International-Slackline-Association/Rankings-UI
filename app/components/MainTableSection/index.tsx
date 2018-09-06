import * as React from 'react';
import TableSearchInput from 'containers/TableSearchInput';
import styled, { colors } from 'styles/styled-components';
import media from 'styles/media';
import TableFilters from 'components/TableFilters';
import SelectedFilterButton from 'components/SelectedFilterButton';
import MainTable from 'containers/MainTable';

const MainTableSection: React.SFC<{}> = () => {
  return (
    <Wrapper>
      <TableSearchInput />
      <TableFilters />
      <SelectedFiltersArea>
        <SelectedFilterButton />
        <SelectedFilterButton />
        <SelectedFilterButton />
        <SelectedFilterButton />
        <SelectedFilterButton />
      </SelectedFiltersArea>
      <MainTable />
    </Wrapper>
  );
};

const SelectedFiltersArea = styled.div`
  margin: 24px 8px 0px 8px;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
`;

const Wrapper = styled.div`
  background-color: ${props => props.theme.componentBackground};
  border: 1px solid ${props => props.theme.border};
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5em;
  box-shadow: 0px 0px 8px 1px ${props => props.theme.border};
  overflow: hidden;
  width: 100%;
  min-height: 100%;
  ${media.tablet`

  `};

  ${media.desktop`

  `};
`;
export default MainTableSection;
