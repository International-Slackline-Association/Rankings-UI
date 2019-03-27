import * as React from 'react';
import AllAge from './misc/AllAge';
import Youth from './misc/Youth';
import Senior from './misc/Senior';

interface AgeIconProps {
  readonly value: string;
}

/* tslint:disable:max-line-length */
class AgeIcon extends React.PureComponent<AgeIconProps> {
  public render() {
    const value = this.props.value;
    return renderSwitch(value);
  }
}

function renderSwitch(param: string) {
  switch (param) {
    case '0':
      return <AllAge />;
    case '1':
      return <Youth />;
    case '2':
      return <Senior />;
    default:
      return <div />;
  }
}

export default AgeIcon;
