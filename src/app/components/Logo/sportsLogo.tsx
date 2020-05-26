import * as React from 'react';

import isaLogo from './isa-sport.svg?file';
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
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
export default IsaSportsLogo;
