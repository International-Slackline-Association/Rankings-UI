import * as React from 'react';
import AllPeople from './misc/AllPeople';
import Male from './misc/Male';
import Female from './misc/Female';

interface PeopleIconProps {
  readonly value: string;
  readonly className?: string;
}

export function PeopleIcon(props: PeopleIconProps) {
  return <div className={props.className}>{renderSwitch(props.value)}</div>;
}

function renderSwitch(param: string) {
  switch (param) {
    case '0':
      return <AllPeople />;
    case '1':
      return <Male />;
    case '2':
      return <Female />;
    default:
      return <div />;
  }
}
