import * as React from 'react';
import styled, { colors } from 'styles/styled-components';
import { TopBarTabType, TopBarTabContentType } from 'types/enums';

import media from 'styles/media';
import { rgba } from 'polished';

interface OwnProps {
  id: string;
  isSelected: boolean;
  name: string;
  type: TopBarTabType;
  contentType: TopBarTabContentType;
  isFirstDynamicTab: boolean;
  onSelect(id: string, contentType: TopBarTabContentType);
}

interface ButtonProps {
  isSelected: boolean;
  isDynamicType: boolean;
  onClick: () => void;
}

interface BorderProps {
  shouldExists: boolean;
  isLarge: boolean;
}

class TopBarButton extends React.PureComponent<OwnProps> {
  private handleSelect = () => {
    this.props.onSelect(this.props.id, this.props.contentType);
  };
  public render() {
    return (
      <React.Fragment>
        <VerticalBorder
          isLarge={this.props.isFirstDynamicTab}
          shouldExists={this.props.type === TopBarTabType.Dynamic}
        />
        <Button
          isDynamicType={this.props.type === TopBarTabType.Dynamic}
          isSelected={this.props.isSelected}
          onClick={this.handleSelect}
        >
          {this.props.name}
        </Button>
      </React.Fragment>
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

const Button = styled<ButtonProps, 'button'>('button')`
  background-color: transparent;
  display: flex;
  height: 100%;
  /* min-width: 10em; */
  padding: 0 16px 0 16px;
  margin: 2px 0px 2px 0px;
  outline: none;
  align-items: center;
  justify-content: center;
  font-weight: ${props => (props.isDynamicType ? 'normal' : 'bold')};
  font-style: ${props => (props.isDynamicType ? 'italic' : 'inherit')};
  text-transform: ${props => (props.isDynamicType ? 'none' : 'uppercase')};
  cursor: pointer;
  font-size: ${props => (props.isDynamicType ? '0.8em' : '1em')};
  border: none;
  transition: border 0.2s;
  color: ${props => (props.isSelected ? props.theme.textPrimary : props.theme.textSecondary)};
  border-bottom: ${props => (props.isSelected ? `2px solid ${colors.isaRed}` : 'none')};

  white-space: nowrap;
  text-align: center;

  ${media.tablet`
      font-size: ${props => (props.isDynamicType ? '1.25em' : '1.33em')};
  `};

  &:hover {
    color: ${props => props.theme.textPrimary};
  }
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;

export default TopBarButton;
