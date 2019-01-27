import * as React from 'react';
import styled from 'styles/styled-components';
import ComponentBackground from 'components/ComponentBackground';

const MainTableSection: React.SFC<{}> = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled(ComponentBackground)`
    display: flex;
    width: 100%;
    /* min-height: 600px; */
    padding-bottom: 32px;
`;
export default MainTableSection;
