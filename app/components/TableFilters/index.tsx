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
  display: flex;
  flex-grow: 1;
  margin-left: 10px;
  margin-top: 8px;
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
    font-size: 1rem;
  `};
  ${media.desktop`
    display: flex;
    font-size: 1rem;
  `};
`;

const ShowFilterButton = styled.button`
  background-color: ${colors.isaBlue};

  position: relative;
  width: 70%;
  left: 15%;
  ${media.tablet`
    display: none;
  `};
`;
export default TableFilters;
