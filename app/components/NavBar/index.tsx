import * as React from 'react';
import Wrapper from './Wrapper';
import IsaSportsLogo from 'components/Logo/sportsLogo';
import RankingsLogo from 'components/Logo/rankingsLogo';

const NavBar: React.SFC<{}> = () => {
  return (
    <Wrapper>
      <RankingsLogo />
    </Wrapper>
  );
};

export default NavBar;
