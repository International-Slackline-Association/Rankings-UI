import * as React from 'react';
import styled from 'styled-components/macro';
import { WorldIcon } from './WorldIcon';
import { DisciplineIcon } from './DisciplineIcon';
import { YearIcon } from './YearIcon';
import { PeopleIcon } from './PeopleIcon';
import { AgeIcon } from './AgeIcon';

interface CategoryIconProps {
  readonly type: string;
  readonly value: string;
}

export function CategoryIcon(props: CategoryIconProps) {
  return <Wrapper>{renderSwitch(props.type, props.value)}</Wrapper>;
}

function renderSwitch(type: string, value: string) {
  switch (type) {
    case 'World':
      return <WorldIcon value={value} />;
    case 'Discipline':
      return <DisciplineIcon value={value} />;
    case 'Year':
      return <YearIcon value={value} />;
    case 'People':
      return <PeopleIcon value={value} />;
    case 'Age':
      return <AgeIcon value={value} />;
    default:
      return <div />;
  }
}

const Wrapper = styled.div`
  max-width: 30px;
  max-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;
