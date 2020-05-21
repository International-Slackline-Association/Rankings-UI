import * as React from 'react';
import AllYear from './misc/AllYear';

interface YearIconProps {
  readonly value: string;
}

export function YearIcon(props: YearIconProps) {
  return renderSwitch(props.value);
}

function renderSwitch(param: string) {
  switch (param) {
    case '0':
      return <AllYear />;
    default:
      return <div />;
  }
}
