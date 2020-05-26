import * as React from 'react';

import rankingsLogo from './Rankings-Logo-Text.svg';
import styled from 'styles/styled-components';
import { clickEffect } from 'styles/mixins';

const RankingsLogo: React.SFC<{}> = () => {
  return (
    <Wrapper href="/">
      <img src={rankingsLogo as any} />
    </Wrapper>
  );
};

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
export default RankingsLogo;
