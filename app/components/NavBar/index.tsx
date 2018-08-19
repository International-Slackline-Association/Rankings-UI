/**
 *
 * NavBar
 *
 */

import * as React from 'react';
import Wrapper from './Wrapper';
import Title from 'components/Title';
import TitleLogo from 'components/TitleLogo';

const NavBar: React.SFC<{}> = () => {
  return (
    <Wrapper>
      <Title />
      <TitleLogo />
    </Wrapper>
  );
};

NavBar.propTypes = {};

export default NavBar;
