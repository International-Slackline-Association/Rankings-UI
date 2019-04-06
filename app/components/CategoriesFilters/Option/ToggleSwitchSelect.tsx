import * as React from 'react';
import styled from 'styles/styled-components';
import { ICategory } from '../types';
import ToggleSwitchSelectOption from './ToggleSwitchSelectOption';
import { VerticalDivider } from 'components/Divider';
import InfoPopover from '../InfoPopover';

interface Props {
  category: ICategory;
}

class ToggleSwitchSelect extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }
  private inputSelected = (evt: any) => {
    const switchValue = evt.target.checked as boolean;
    const selectedValue = this.props.category.options[switchValue ? 1 : 0]
      .value;
    this.props.category.categorySelected(selectedValue);
  };

  public render() {
    const category = this.props.category;
    let defaultChecked = false;
    if (category.selectedValue) {
      const selectedValueIndex = category.options.findIndex(
        c => c.value === category.selectedValue,
      );
      defaultChecked = selectedValueIndex === 0 ? false : true;
    }
    const labels = category.options.map(o => o.label);
    return (
      <Wrapper>
        <ToggleSwitchSelectOption
          title={labels[0]}
          isSelected={defaultChecked === false}
          selectedValue={category.options[0].value}
        />
        <SwitchWrapper>
          <Input
            onChange={this.inputSelected}
            defaultChecked={defaultChecked}
            type="checkbox"
            id="switch"
          />
          <Label htmlFor="switch">Toggle</Label>
          <InfoPopover />
        </SwitchWrapper>

        <ToggleSwitchSelectOption
          title={labels[1]}
          isSelected={defaultChecked === true}
          selectedValue={category.options[1].value}
        />
        <Divider />
      </Wrapper>
    );
  }
}

const SwitchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 120%;
`;

const Label = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  min-width: 48px;
  width: 48px;
  height: 24px;
  background: ${props => props.theme.componentBackgroundSecondary};
  display: block;
  border-radius: 100px;
  position: relative;
  margin-bottom: 8px;
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 24px;
    transition: 0.3s;
  }
  &:active:after {
    width: 24px;
  }
`;

const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + ${Label} {
    background: ${props => props.theme.componentBackgroundSecondary};
  }

  &:checked + ${Label}:after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;

const Divider = styled(VerticalDivider)`
  height: 80%;
  margin-left: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* align-self: center; */
`;

export default ToggleSwitchSelect;
