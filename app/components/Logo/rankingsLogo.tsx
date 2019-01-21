import * as React from 'react';

import rankingsLogo from './Rankings-Logo-Text.svg';
import styled from 'styles/styled-components';

const RankingsLogo: React.SFC<{}> = () => {
  return (
    <Wrapper>
      <img src={rankingsLogo as any} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
