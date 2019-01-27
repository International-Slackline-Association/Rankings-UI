import * as React from 'react';
import styled, { css } from 'styles/styled-components';
import isaLogo from 'components/Avatars/isaLogo.svg?file';
import ComponentBackground from '.';

interface Props {}

class IsaBlurBackground extends React.PureComponent<Props> {
  public render() {
    return (
      <Wrapper>
        <Logo />
      </Wrapper>
    );
  }
}

const Wrapper = styled(ComponentBackground)`
  && {
    position: absolute;
    display: block;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    overflow: hidden;
    background-color: #333c4e;
  }
`;

const Logo = styled.div`
  position: absolute;
  display: block;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-image: url(${isaLogo});
  background-size: 100%;
  background-position: center;
  background-color: #333c4e;
  filter: blur(60px);
  opacity: 0.35;
`;

export default IsaBlurBackground;
