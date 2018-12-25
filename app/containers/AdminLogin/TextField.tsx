import * as React from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField/TextField';
import styled from 'styles/styled-components';

interface OwnProps {}

const textField = (props: any) => <TextField {...props} />;

const StyledTextField = styled(textField)`
  && {
    width: 150px;
    margin-bottom: 32px;
  }
`;

export default StyledTextField;
