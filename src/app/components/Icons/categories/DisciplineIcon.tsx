import * as React from 'react';
import Aerial from './disciplines/Aerial';
import Contact from './disciplines/Contact';
import Rigging from './disciplines/Rigging';
import Blind from './disciplines/Blind';
import StaticJib from './disciplines/StaticJib';
import SpeedlineHighLong from './disciplines/SpeedlineHighLong';
import SpeedlineSprint from './disciplines/SpeedlineSprint';
import Endurance from './disciplines/Endurance';
import Transfer from './disciplines/Transfer';
import Overall from './disciplines/Overall';

interface DisciplineIconProps {
  readonly value: string;
  className?: string;
}

export function DisciplineIcon(props: DisciplineIconProps) {
  return <div className={props.className}>{renderSwitch(props.value)}</div>;
}

function renderSwitch(param: string) {
  switch (param) {
    case '0':
      return <Overall />;
    case '2':
      return <Aerial />;
    case '3':
      return <StaticJib />;
    case '4':
      return <Transfer />;
    case '5':
      return <Contact />;
    case '7':
      return <SpeedlineSprint />;
    case '8':
      return <SpeedlineHighLong />;
    case '9':
      return <Endurance />;
    case '10':
      return <Blind />;
    case '11':
      return <Rigging />;
    default:
      return <div />;
  }
}
