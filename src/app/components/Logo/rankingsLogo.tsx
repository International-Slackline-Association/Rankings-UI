import * as React from 'react';

import rankingsLogo from './Rankings-Logo-Text.svg';
import styled from 'styled-components/macro';
import { clickEffect } from 'styles/mixins';

export function RankingsLogo() {
  return (
    <Wrapper href="/">
      <img src={rankingsLogo} alt="" />
    </Wrapper>
  );
}

const Wrapper = styled.a`
  ${clickEffect};
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 8px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
