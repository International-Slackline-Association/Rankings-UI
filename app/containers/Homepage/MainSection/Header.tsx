import * as React from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';
import { clickEffect } from 'styles/mixins';

interface Props {}

class Header extends React.PureComponent<Props> {
  public render() {
    return (
      <Wrapper>
        <Link>About ISA Sport</Link>
        <Link>Members & Partners</Link>
        <Link>FAQ</Link>
        <Link>Open Source</Link>
      </Wrapper>
    );
  }
}

const Link = styled.a`
  ${clickEffect};
  color: ${props => props.theme.newTextPrimaryLighter};
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  margin: 0px 16px 8px 0px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  ${media.desktop`
    font-size: 1.2rem;
`};
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  ${media.desktop`

  `};
`;

export default Header;
