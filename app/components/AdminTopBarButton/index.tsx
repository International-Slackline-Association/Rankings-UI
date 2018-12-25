import * as React from 'react';
import { TopBarTabType, TopBarTabContentType } from 'types/enums';

import media from 'styles/media';
import { rgba } from 'polished';
import { Tab } from '@material-ui/core';
import styled, { colors } from 'styles/styled-components';

interface OwnProps {
  id: string;
  isSelected: boolean;
  name: string;
  onSelect(id: string): void;
}

interface ButtonProps {
  isSelected: boolean;
  onClick(): void;
  label: string;
}

class AdminTopBarButton extends React.PureComponent<OwnProps> {
  private handleSelect = () => {
    this.props.onSelect(this.props.id);
  };
  public render() {
    const { name } = this.props;
    const label = name;
    return (
      <Button
        isSelected={this.props.isSelected}
        onClick={this.handleSelect}
        label={label}
      />
    );
  }
}

const tab = (props: ButtonProps) => {
  const { isSelected, ...rest } = props;
  return (
    <Tab
      {...rest}
      classes={{
        label: 'label',
        wrapper: 'wrapper',
        labelContainer: 'labelContainer',
      }}
    />
  );
};

const Button = styled<ButtonProps>(tab)`
  && {
    min-width: 0px;
    min-height: 0px;
    text-transform: uppercase;
    color: ${props =>
      props.isSelected ? props.theme.textPrimary : props.theme.textSecondary};

    white-space: nowrap;
    text-align: center;

    &:hover {
      color: ${props => props.theme.textPrimary};
    }
    &:active {
      outline: none;
    }
    &:focus {
      outline: none;
    }
    & .labelContainer {
      padding: 0 16px 0 16px;
    }

    & .label {
      font-size: 1em;

      ${media.tablet`
        font-size: 1.5em;
      `};
    }
    & .wrapper {
    }
  }
`;

export default AdminTopBarButton;
