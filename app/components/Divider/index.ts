import styled from 'styles/styled-components';

const Divider = styled.hr`
  height: 1px;
  border: none;
  background-color: ${props => props.theme.divider};
`;

export default Divider;
