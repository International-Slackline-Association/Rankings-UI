import * as React from 'react';
import AllYear from './misc/AllYear';

interface YearIconProps {
  readonly value: string;
}

/* tslint:disable:max-line-length */
class YearIcon extends React.PureComponent<YearIconProps> {
  public render() {
    const value = this.props.value;
    return renderSwitch(value);
  }
}

function renderSwitch(param: string) {
  switch (param) {
    case '0':
      return <AllYear />;
    default:
      return <div />;
  }
}

export default YearIcon;
