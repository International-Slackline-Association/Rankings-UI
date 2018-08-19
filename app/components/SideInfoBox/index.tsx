import * as React from 'react';
import TableSearchInput from 'containers/TableSearchInput';
import styled, { colors } from 'styles/styled-components';
import media from 'styles/media';

const SideInfoBox: React.SFC<{}> = () => {
  return <Wrapper />;
};

const Wrapper = styled.div`
  background-color: ${colors.white};
  box-shadow: 0px 0px 8px 1px ${colors.grayLight};
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
