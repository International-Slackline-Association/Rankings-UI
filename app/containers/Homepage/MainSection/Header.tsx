import * as React from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';

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
  color: ${props => props.theme.componentBackgroundInverted};
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  margin: 0px 16px 8px 0px;
  text-decoration: none;
  cursor: pointer;
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
