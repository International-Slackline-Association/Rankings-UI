import * as React from 'react';
import isaLogo from 'app/components/Avatars/isaLogo.svg';
import { ComponentBackground } from '.';
import styled from 'styled-components/macro';

export function IsaBlurBackground() {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
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
