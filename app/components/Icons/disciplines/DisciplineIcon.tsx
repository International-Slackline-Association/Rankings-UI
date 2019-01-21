import * as React from 'react';
import styled from 'styles/styled-components';
import Discipline1 from './1';
import Discipline2 from './2';
import Discipline3 from './3';
import Discipline6 from './6';
import Discipline8 from './8';
import Discipline9 from './9';
import Discipline10 from './10';
import Discipline11 from './11';
import Discipline13 from './13';
import Discipline14 from './14';
import Discipline15 from './15';
import Discipline16 from './16';

interface DisciplineIconProps {
  readonly discipline: string;
}

/* tslint:disable:max-line-length */
class DisciplineIcon extends React.PureComponent<DisciplineIconProps> {
  public render() {
    const discipline = this.props.discipline;
    return <Wrapper>{renderSwitch(discipline)}</Wrapper>;
  }
}

function renderSwitch(param: string) {
  switch (param) {
    case '1':
      return <Discipline1/>;
    case '2':
      return <Discipline2 />;
    case '3':
      return <Discipline3 />;
    case '6':
      return <Discipline6 />;
    case '8':
      return <Discipline8 />;
    case '9':
      return <Discipline9 />;
    case '10':
      return <Discipline10 />;
    case '11':
      return <Discipline11 />;
    case '13':
      return <Discipline13 />;
    case '14':
      return <Discipline14 />;
    case '15':
      return <Discipline15 />;
    case '16':
      return <Discipline16 />;
    default:
      return <div />;
  }
}

const Wrapper = styled.div`
  max-width: 30px;
  max-height: 30px;
`;
export default DisciplineIcon;
