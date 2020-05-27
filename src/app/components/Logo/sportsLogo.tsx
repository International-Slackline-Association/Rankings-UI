import * as React from 'react';

import isaLogo from './isa-sport.svg';
import styled from 'styled-components/macro';

export function IsaSportsLogo() {
  return (
    <Link
      href={'//www.slacklineinternational.org/ranking-list/'}
      target="_blank"
    >
      <img src={isaLogo} alt="" />
    </Link>
  );
}

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
