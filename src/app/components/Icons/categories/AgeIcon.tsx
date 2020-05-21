import * as React from 'react';
import AllAge from './misc/AllAge';
import Youth from './misc/Youth';
import Senior from './misc/Senior';

interface AgeIconProps {
  readonly value: string;
}

export function AgeIcon(props: AgeIconProps) {
  return renderSwitch(props.value);
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
