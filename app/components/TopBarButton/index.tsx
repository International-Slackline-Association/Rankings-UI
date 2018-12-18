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
  discipline?: string;
  type: TopBarTabType;
  contentType: TopBarTabContentType;
  isFirstDynamicTab: boolean;
  onSelect(
    id: string,
    contentType: TopBarTabContentType,
    discipline?: string,
  ): void;
}

interface ButtonProps {
  isSelected: boolean;
  isDynamicType: boolean;
  onClick(): void;
  label: string;
}

interface BorderProps {
  shouldExists: boolean;
  isLarge: boolean;
}

class TopBarButton extends React.PureComponent<OwnProps> {
  private handleSelect = () => {
    this.props.onSelect(
      this.props.id,
      this.props.contentType,
      this.props.discipline,
    );
  };
  public render() {
    const { name, discipline, contentType } = this.props;
    const label =
      contentType === TopBarTabContentType.contest
        ? `${name}-${discipline}`
        : name;
    return (
      <Button
        isDynamicType={this.props.type === TopBarTabType.Dynamic}
        isSelected={this.props.isSelected}
        onClick={this.handleSelect}
        label={label}
      />
    );
  }
}
const VerticalBorder = styled<BorderProps, 'div'>('div')`
  height: ${props => (props.isLarge ? '50%' : '30%')};
  display: ${props => (props.shouldExists ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  transition: all 0.1s;
  border: 1px solid ${rgba(colors.grayLight, 0.4)};
  border-radius: 1px;
`;

const tab = (props: ButtonProps) => {
  const { isSelected, isDynamicType, ...rest } = props;
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
    /* padding: 0 16px 0 16px; */
    font-style: ${props => (props.isDynamicType ? 'italic' : 'inherit')};
    text-transform: ${props => (props.isDynamicType ? 'none' : 'uppercase')};
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
      font-size: ${props => (props.isDynamicType ? '0.8em' : '1em')};

      ${media.tablet`
        font-size: ${props => (props.isDynamicType ? '1.25em' : '1.5em')};
      `};
    }
    & .wrapper {
      /* border-right: 1px solid ${rgba(colors.grayLight, 0.4)}; */
    }
  }
`;

export default TopBarButton;
