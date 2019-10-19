import * as React from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';

interface Props {}

class MainSection extends React.PureComponent<Props> {
  public render() {
    return <Wrapper />;
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-basis: 45%;
  height: 20rem;
  width: 100%;
  ${media.desktop`
    height: 100%;
  `};
`;

export default MainSection;
