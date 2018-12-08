import styled from 'styles/styled-components';

interface Props {
  margin?: number;
}
const Divider = styled<Props, 'hr'>('hr')`
  height: 1px;
  width: auto;
  margin: auto ${props => props.margin ? props.margin : '0'}px;
  border: none;
  background-color: ${props => props.theme.divider};
`;

export const VerticalDivider = styled<Props, 'hr'>('hr')`
  height: auto;
  width: 1px;
  margin: ${props => props.margin ? props.margin : '0'}px auto;
  border: none;
  background-color: ${props => props.theme.divider};
`;


export default Divider;
