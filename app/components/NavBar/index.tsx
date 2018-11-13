/**
 *
 * NavBar
 *
 */

import * as React from 'react';
import Wrapper from './Wrapper';
import Title from 'components/Title';
import TitleLogo from 'components/TitleLogo';

const HeaderBar: React.SFC<{}> = () => {
  return (
    <Wrapper>
      <Title />
      <TitleLogo />
    </Wrapper>
  );
};

// NavBar.propTypes = {};

export default HeaderBar;
