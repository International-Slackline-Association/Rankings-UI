import styled from 'styles/styled-components';

const ComponentBackground = styled.div`
  background-color: ${props => props.theme.componentBackground};
  border-radius: 4px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`;
export default ComponentBackground;
