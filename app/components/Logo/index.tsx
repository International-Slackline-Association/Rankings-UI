import * as React from 'react';

import isaLogo from './isaLogo.svg?file';
import styled from 'styles/styled-components';

const TitleLogo: React.SFC<{}> = () => {
  return (
    <Wrapper>
      <img src={isaLogo as any} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  /* width: 150px; */
  /* display: flex; */
  /* justify-content: center; */

  img {
    width: 100%;
    height: 100%;
  }
`;
export default TitleLogo;
