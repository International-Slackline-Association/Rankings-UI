import { Paper } from '@material-ui/core';
import styled from 'styles/styled-components';
import { PaperProps } from '@material-ui/core/Paper';

interface Props extends PaperProps {}

const ComponentBackground = styled<Props>(Paper).attrs({
  component: 'div',
  elevation: 2,
})`
  && {
    background-color: ${props => props.theme.componentBackground};
  }
`;

export default ComponentBackground;
