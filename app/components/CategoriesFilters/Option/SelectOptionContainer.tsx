import * as React from 'react';
import SelectOption from './SelectOption';
import { MenuItem } from '@material-ui/core';
interface Props {}

interface Props {
  onSelect(value: string);
}

class SelectOptionContainer extends React.PureComponent<Props> {
  private onSelect = (value: string) => () => {
    this.props.onSelect(value);
  };

  public render() {
    return (
      <React.Fragment>
        <SelectOption
          value={'1'}
          inlineLevel={0}
          label={'Overall'}
          onSelect={this.onSelect('1')}
        />

        <SelectOption
          value={'2'}
          inlineLevel={1}
          label={'Freestyle'}
          isContainerStyle={true}
          onSelect={this.onSelect('2')}
        />
        <SelectOption
          value={'3'}
          inlineLevel={2}
          label={'Trickline'}
          onSelect={this.onSelect('3')}
        />
        <SelectOption
          value={'4'}
          inlineLevel={3}
          label={'Aerial'}
          showDivider={false}
          onSelect={this.onSelect('4')}
        />
        <SelectOption
          value={'5'}
          inlineLevel={1}
          label={'Walking'}
          isContainerStyle={true}
          onSelect={this.onSelect('5')}
        />
      </React.Fragment>
    );
  }
}

export default SelectOptionContainer;
