import * as React from 'react';

import isaLogo from './isaLogo.svg';
import styled from 'styled-components/macro';

export function TitleLogo() {
  return (
    <Wrapper>
      <img src={isaLogo} alt="" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;
