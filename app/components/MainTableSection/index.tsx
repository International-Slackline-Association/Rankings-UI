import * as React from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';
import ComponentBackground from 'components/ComponentBackground';

const MainTableSection: React.SFC<{}> = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled(ComponentBackground)`

    /* background-color: ${props => props.theme.componentBackground}; */
    /* border: 1px solid ${props => props.theme.border}; */
    display: flex;
    /* align-items: stretch; */
    /* border-radius: 0.5em; */
    /* box-shadow: 0px 0px 8px 1px ${props => props.theme.border}; */
    /* overflow: hidden; */
    width: 100%;
    /* min-height: 600px; */
    /* min-height: calc(100vh - 200px); */
    padding-bottom: 32px;
    /* margin-bottom: 16px; */

`;
export default MainTableSection;
