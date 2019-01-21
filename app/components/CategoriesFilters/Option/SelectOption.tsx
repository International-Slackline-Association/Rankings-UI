import * as React from 'react';
import styled from 'styles/styled-components';
import { clickEffect } from 'styles/mixins';
import Divider from 'components/Divider';
import { UISelectOption } from 'types/application';
import DisciplineIcon from 'components/Icons/DisciplineIcon';

interface Props extends UISelectOption {
  hideDivider?: boolean;
  hasIcon?: boolean;
  onSelect(value: string);
}

class SelectOption extends React.PureComponent<Props> {
  private onClick = () => {
    this.props.onSelect(this.props.value);
  };

  public render() {
    const {
      label,
      inlineLevel,
      isContainerStyle,
      hideDivider,
      hasIcon,
    } = this.props;
    const wrapperMarginLeft = 16 * (1 + (inlineLevel || 0));
    const hasDivider = !isContainerStyle && !hideDivider;
    return (
      <Wrapper style={{ marginLeft: wrapperMarginLeft }}>
        <Button
          isContainerStyle={isContainerStyle}
          hasIcon={hasIcon}
          disabled={isContainerStyle}
          onClick={this.onClick}
        >
          {hasIcon && <DisciplineIcon discipline={this.props.value} />}
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
  hasIcon?: boolean;
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
  align-items: center;

  & span {
    font-size: 1em;
    font-weight: inherit;
    margin-left: ${props => (props.hasIcon ? '8px' : '0')};
    color: ${props =>
      props.isContainerStyle
        ? props.theme.textSecondary
        : props.theme.textPrimary};
  }
`;

export default SelectOption;
