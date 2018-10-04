import * as React from 'react';

import styled, { colors } from 'styles/styled-components';
import media from 'styles/media';

const TableFilters: React.SFC<{}> = props => {
  return (
    <Wrapper>
      <TableFiltersWrapper>{props.children}</TableFiltersWrapper>
      <ShowFilterButton> Show Filters </ShowFilterButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 2em;
  margin-top: 1.2em;
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
