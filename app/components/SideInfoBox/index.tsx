import styled from 'styles/styled-components';
import media from 'styles/media';
import * as React from 'react';

const SideInfoBox: React.SFC<{}> = () => {
  return <Wrapper />;
};

const Wrapper = styled.div`
  background-color: ${props => props.theme.componentBackground};
  border: 1px solid ${props => props.theme.border};
  border-radius: 0.5em;
  box-shadow: 0px 0px 8px 1px ${props => props.theme.border};
  display: none;
  min-height: 100%;
  margin: 0 0px 0px 30px;

  ${media.tablet`
    /* display: flex; */
    /* width: 100%; */
  `};

  ${media.desktop`
    display: flex;
    width: 33%;

  `};
`;

export default SideInfoBox;
