import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styles/styled-components';

interface Props {
  open: boolean;
  message: string;
  handleClose(event, reason): void;
  type?: 'error' | 'success';
}

class SimpleSnackbar extends React.Component<Props> {
  public render() {
    const type = this.props.type || 'error';
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.props.open}
        autoHideDuration={2000}
        onClose={this.props.handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<Message type={type}>{this.props.message}</Message>}
        action={
          // tslint:disable-next-line:jsx-wrap-multiline
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={this.props.handleClose as any}
          >
            <CloseIcon />
          </IconButton>
        }
      />
    );
  }
}

interface MessageProps {
  type: 'error' | 'success';
}
const Message = styled<MessageProps, 'span'>('span')`
  color: ${props => (props.type === 'error' ? 'red' : 'green')};
  font-size: 1.5em;
`;

export default SimpleSnackbar;
