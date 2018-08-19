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
      {/* <LineBreak /> */}
      <SelectedFiltersArea>
        <SelectedFilterButton />
      </SelectedFiltersArea>
      <MainTable />
    </Wrapper>
  );
};

const SelectedFiltersArea = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  /* width: 0px;
  height: 0px;
  overflow: hidden; */
`;

const Wrapper = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0px 0px 8px 1px ${colors.grayLight};
  /* justify-content: flex-start; */
  /* align-content: space-between; */
  width: 100%;
  min-height: 100%;
  /* min-width: 200px; */
  /* min-height: 200px; */
  ${media.tablet`

  `};

  ${media.desktop`

  `};
`;
export default MainTableSection;
