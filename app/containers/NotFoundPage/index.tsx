import * as React from 'react';

import TabPanel from 'components/TabPanel';
import Footer from 'components/Footer';
import styled from 'styles/styled-components';

export default class NotFound extends React.PureComponent {
  public render() {
    return (
      <StyledTabPanel>
        <Wrapper>
          <Header big>OOPS!</Header>
          <Header> PAGE NOT FOUND</Header>
        </Wrapper>
        <Footer />
      </StyledTabPanel>
    );
  }
}

const StyledTabPanel = styled(TabPanel)`
  padding: 0px;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  /* background-color: ${props => props.theme.componentBackgroundSecondary}; */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-self: center;
  align-content: center;
  padding: 64px 0px;
`;

interface HeaderProps {
  big?: boolean;
}
const Header = styled<HeaderProps, 'h1'>('h1')`
  font-size: ${props => (props.big ? '4em' : '2em')};
  margin-bottom: 32px;
  color: ${props => props.theme.textPrimary};
`;
