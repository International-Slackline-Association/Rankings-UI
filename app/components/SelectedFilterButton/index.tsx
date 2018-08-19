import * as React from 'react';
import MainTableSection from 'components/MainTableSection';

import styled, { colors } from 'styles/styled-components';
import media from 'styles/media';
import zIndex from 'styles/zIndex';
import breakpoints from 'styles/breakpoints';

const SelectedFilterButton: React.SFC<{}> = () => {
  return (
    <Wrapper>
      <Text>Highline</Text>
      <CloseButton>x</CloseButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${colors.orange};
  margin-right: 8px;
  min-width: 5%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  /* min-width: 10%; */
`;
const CloseButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  /* min-width: 10%; */
`;
export default SelectedFilterButton;
