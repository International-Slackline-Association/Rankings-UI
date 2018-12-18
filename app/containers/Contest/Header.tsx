import styled from 'styles/styled-components';

interface OwnProps {}

const Header = styled<OwnProps, 'h1'>('h1')`
  font-size: 2em;
  margin-bottom: 16px;
`;

export default Header;
