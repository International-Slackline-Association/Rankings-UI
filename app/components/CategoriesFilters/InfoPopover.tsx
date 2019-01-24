import * as React from 'react';
import { Popover } from '@material-ui/core';
import InfoIcon from 'components/Icons/InfoIcon';
import styled from 'styles/styled-components';
import { clickEffect, DefaultButton } from 'styles/mixins';
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
              <p>Categories are how athletes ranked in a group.</p>
              <p>
                Each category combination
                <i> (for instance, Overall-2018-Men-Youth) </i>
                provides rankings of the athletes in the same group.
              </p>
              <p>
                Given this, a single athlete might have different rankings in
                multiple groups(category combinations).
              </p>
              <p>
                However, filters does not effect the athlete's rank. It works
                only within a category group and filters the rankings inside the
                group
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
