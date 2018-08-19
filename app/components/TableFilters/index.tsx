import * as React from 'react';
import MainTableSection from 'components/MainTableSection';

import styled, { colors } from 'styles/styled-components';
import media from 'styles/media';
import breakpoints from 'styles/breakpoints';
import AppConstants from 'styles/AppConstants';
import TableFilter from 'containers/TableFilter';

const TableFilters: React.SFC<{}> = () => {
  return (
    <Wrapper>
      <TableFiltersWrapper>
        <TableFilter />
        <TableFilter />
        <TableFilter />
        <TableFilter />
        <TableFilter />
        <TableFilter />
        <TableFilter />
      </TableFiltersWrapper>
      <ShowFilterButton> Show Filters </ShowFilterButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-grow: 1;
  margin-left: 10px;
  ${media.tablet`
  `};

  ${media.desktop`
  `};
`;

const TableFiltersWrapper = styled.div`
  display: none;
  flex-grow: 1;
  ${media.tablet`
    display: flex;
  `};
`;

const ShowFilterButton = styled.button`
  background-color: ${colors.paleBlue};

  position: relative;
  width: 70%;
  left: 15%;
  ${media.tablet`
    display: none;
  `};
`;
export default TableFilters;
