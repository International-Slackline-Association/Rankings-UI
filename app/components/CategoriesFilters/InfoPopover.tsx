import * as React from 'react';
import { Popover } from '@material-ui/core';
import InfoIcon from 'components/Icons/InfoIcon';
import styled from 'styles/styled-components';
import { DefaultButton } from 'styles/mixins';
import ComponentBackground from 'components/ComponentBackground';
interface Props {}

interface State {
  anchorEl: any;
}

class InfoPopover extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  private handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  private handleClose = () => {
    this.setState({ anchorEl: null });
  };

  public render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Button
          aria-owns={open ? 'simple-popper' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <InfoIcon />
        </Button>
        <Popover
          open={open}
          id="mouse-over-popover"
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          disableRestoreFocus
        >
          <TextArea>
            <span>
              <p>
                <strong>* Top Score</strong> sums up the
                <strong> TWO </strong>highest point rankings collected
                <br />
                <br />
                <strong>* Point Score</strong> combines the points from all
                contests visited.
              </p>
            </span>
          </TextArea>
        </Popover>
      </div>
    );
  }
}

const TextArea = styled(ComponentBackground)`
  padding: 16px;
`;

const Button = styled(DefaultButton)`
  margin-left: 8px;
  display: flex;
  flex: none;

  width: 15px;
  height: 15px;
`;

export default InfoPopover;
