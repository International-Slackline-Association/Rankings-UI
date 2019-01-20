import * as React from 'react';
import Wrapper from './Wrapper';
import Title from 'components/Title';
import IsaSportsLogo from 'components/Logo/sportsLogo';

const HeaderBar: React.SFC<{}> = () => {
  return (
    <Wrapper>
      <Title />
      <IsaSportsLogo />
    </Wrapper>
  );
};

// NavBar.propTypes = {};

export default HeaderBar;
