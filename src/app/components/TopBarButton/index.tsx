import * as React from 'react';
import { TopBarTabType, TopBarTabContentType } from 'types/enums';
import { media } from 'styles/media';
import { rgba } from 'polished';
import styled from 'styled-components/macro';
import { colors } from 'styles/theme/themes';

interface Props {
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
}

interface BorderProps {
  shouldExists: boolean;
  isLarge: boolean;
}

export function TopBarButton(props: Props) {
  const handleSelect = () => {
    props.onSelect(props.id, props.contentType, props.discipline);
  };

  const label = props.name;
  const isDynamicType = props.type === TopBarTabType.Dynamic;
  return (
    <React.Fragment>
      <VerticalBorder
        shouldExists={isDynamicType}
        isLarge={props.isFirstDynamicTab}
      />
      <Button
        isDynamicType={isDynamicType}
        isSelected={props.isSelected}
        onClick={handleSelect}
      >
        {label}
      </Button>
    </React.Fragment>
  );
}
const VerticalBorder = styled.div<BorderProps>`
  height: ${props => (props.isLarge ? '50%' : '30%')};
  display: ${props => (props.shouldExists ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  transition: all 0.1s;
  border: 1px solid ${rgba(colors.grayLight, 0.4)};
  border-radius: 1px;
`;

const Button = styled.button<ButtonProps>`
  /* width: 100%; */
  height: 100%;
  white-space: nowrap;
  text-align: center;
  padding: 0 24px 0 24px;
  border-bottom: ${props => (props.isSelected ? '2px solid red' : '')};
  cursor: pointer;
  font-style: ${props => (props.isDynamicType ? 'italic' : 'inherit')};
  font-weight: ${props =>
    props.isSelected && !props.isDynamicType ? 'bold' : ''};
  text-transform: ${props => (props.isDynamicType ? 'none' : 'uppercase')};
  transition: border-width 0.1s linear;
  color: ${props =>
    props.isSelected ? props.theme.textTopBar : props.theme.textSecondary};
  font-size: ${props => (props.isDynamicType ? '0.8em' : '1em')};

  &:hover {
    color: ${props => props.theme.textTopBar};
  }
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }

  ${media.tablet`
        font-size: ${props => (props.isDynamicType ? '1.25em' : '1.5em')};
      `};
  ${media.desktop`
        font-size: ${props => (props.isDynamicType ? '1.25em' : '1.5em')};
      `};
`;

export default TopBarButton;
