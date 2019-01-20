import * as React from 'react';

import isaLogo from './isa-sports-logo.svg?file';
import styled from 'styles/styled-components';

const IsaSportsLogo: React.SFC<{}> = () => {
  return (
    <Link
      href={'//www.slacklineinternational.org/ranking-list/'}
      target="_blank"
    >
      <img src={isaLogo as any} />
    </Link>
  );
};

const Link = styled.a`
  height: 100%;
  /* width: 150px; */
  /* display: none; */
  &:hover {
    text-decoration: underline;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
export default IsaSportsLogo;
