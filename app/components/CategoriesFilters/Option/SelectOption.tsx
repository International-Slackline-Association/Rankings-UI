import * as React from 'react';
import styled from 'styles/styled-components';
import { clickEffect } from 'styles/mixins';
import Divider from 'components/Divider';
import { ISelectOption } from '../types';

interface Props extends ISelectOption {
  hideDivider?: boolean;
  onSelect(value: string);
}

class SelectOption extends React.PureComponent<Props> {
  private onClick = () => {
    this.props.onSelect(this.props.value);
  };

  public render() {
    const { label, inlineLevel, isContainerStyle, hideDivider } = this.props;
    const wrapperMarginLeft = 16 * (1 + (inlineLevel || 0));
    const hasDivider =
      !isContainerStyle && !hideDivider;
    return (
      <Wrapper style={{ marginLeft: wrapperMarginLeft }}>
        <Button
          isContainerStyle={isContainerStyle}
          disabled={isContainerStyle}
          onClick={this.onClick}
        >
          <span>{label}</span>
        </Button>
        {hasDivider && <Divider />}
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  display: flex;
  margin: 8px 16px 8px 16px;
  flex-direction: column;
`;

interface ButtonProps {
  isContainerStyle?: boolean;
}
const Button = styled<ButtonProps, 'button'>('button')`
  ${props => (props.isContainerStyle ? '' : clickEffect)};
  padding: 0px;
  margin: 8px 0px;
  display: flex;
  border: none;
  cursor: ${props => (props.isContainerStyle ? '' : 'pointer')};
  outline: none;
  background-color: transparent;

  & span {
    font-size: 1em;
    font-weight: inherit;
    color: ${props =>
      props.isContainerStyle
        ? props.theme.textSecondary
        : props.theme.textPrimary};
  }
`;

export default SelectOption;
