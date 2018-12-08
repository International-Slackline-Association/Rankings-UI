import { Paper } from '@material-ui/core';
import styled from 'styles/styled-components';
import * as React from 'react';

interface OwnProps {}

const paper = props => <Paper component="div" elevation={2} {...props} />;

const Wrapper = styled(Paper).attrs({
  component: 'div',
  elevation: 2,
})`
  && {
    background-color: ${props => props.theme.componentBackground};
  }
`;

export default Wrapper;
